import { useState } from "react";
import "./BookingPage.css";

function BookingPage() {
  const [step, setStep] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "Python",
  });

  const [errors, setErrors] = useState({});

  // Validation
  const validateStep = () => {
    let newErrors = {};

    if (step === 1 && !formData.name) {
      newErrors.name = "Name is required";
    }

    if (step === 2) {
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!formData.email.includes("@")) {
        newErrors.email = "Invalid email";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      setStep(1);
      setFormData({ name: "", email: "", workshop: "Python" });
    }, 3000);
  };

  return (
    <div className="booking">
      <h2>Workshop Registration</h2>

      {/* PROGRESS BAR */}
      <div className="progress">
        <div className={`step ${step >= 1 ? "active" : ""}`}></div>
        <div className={`step ${step >= 2 ? "active" : ""}`}></div>
        <div className={`step ${step >= 3 ? "active" : ""}`}></div>
      </div>

      {/* TOAST */}
      {showToast && <div className="toast">🎉 Booking Successful!</div>}

      {/* FORM */}
      <div className="form-box">
        {step === 1 && (
          <>
            <label>Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <button onClick={nextStep}>Next →</button>
          </>
        )}

        {step === 2 && (
          <>
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <div className="btn-group">
              <button onClick={prevStep}>← Back</button>
              <button onClick={nextStep}>Next →</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <label>Workshop</label>
            <select
              value={formData.workshop}
              onChange={(e) =>
                setFormData({ ...formData, workshop: e.target.value })
              }
            >
              <option>Python</option>
              <option>AI/ML</option>
              <option>Web Development</option>
              <option>Data Science</option>
            </select>

            <div className="btn-group">
              <button onClick={prevStep}>← Back</button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BookingPage;
