import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function Hook() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const formType = state?.type || 'Request for help'

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log("Form Data:", data)
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "30px",
        backgroundColor: "#f9f9f9",
        borderRadius: "15px",
        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "25px",
          color: "#333"
        }}
      >
        {formType}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
      


        {/* Category */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="options" style={{ fontWeight: "500" }}>Select a Category</label><br />
          <select
            id="options"
            {...register("Options", { required: "Please select a category" })}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "8px",
              backgroundColor: "#fff"
            }}
            defaultValue=""
          >
            <option value="" disabled>Choose an option</option>
            <option value="General Assistance">General Assistance</option>
            <option value="Emergency & Health Assistance">Emergency & Health Assistance</option>
            <option value="Educational Support">Educational Support</option>
            <option value="Volunteer & Environmental Work">Volunteer & Environmental Work</option>
            <option value="Technical and Professional Help">Technical and Professional Help</option>
            <option value="Community and Social Support">Community and Social Support</option>
          </select>
          {errors.Options && <p style={{ color: "red", marginTop: "5px" }}>{errors.Options.message}</p>}
        </div>

        {/* Details */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="details" style={{ fontWeight: "500" }}>
            Details of your {formType.toLowerCase()}
          </label><br />
          <textarea
            id="details"
            rows={5}
            {...register("details", { required: "Details are required" })}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "8px"
            }}
            placeholder={`Please describe your ${formType.toLowerCase()}...`}
          />
          {errors.details && <p style={{ color: "red", marginTop: "5px" }}>{errors.details.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            fontSize: "16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            transition: "background-color 0.3s",
            marginBottom: "15px"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#45a049"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#4CAF50"}
        >
          Submit
        </button>
      </form>

      {/* Go Back Button */}
      <button
        onClick={() => navigate('/')}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#f44336",
          color: "#fff",
          fontSize: "16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
          transition: "background-color 0.3s"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#e53935"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#f44336"}
      >
        Go Back
      </button>
    </div>
  )
}