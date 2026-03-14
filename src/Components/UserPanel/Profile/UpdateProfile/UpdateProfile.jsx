import { useState, useMemo } from 'react';
import { City, Country, State } from 'country-state-city';
import { getDistricts } from 'india-state-district';
import '../../../Public/Register/Register.css';

function UpdateProfile() {
  const [form, setForm] = useState({
    fullName: '',
    mobile: '',
    dob: '',
    email: '',
    address: '',
    city: '',
    state: '',
    country: 'IN',
    pincode: '',
    image: null,
    nomineeName: '',
    nomineeRelation: '',
    nomineeAge: '',
    nomineeMobile: '',
  });

  const countryOptions = useMemo(() => Country.getAllCountries(), []);
  const stateOptions = useMemo(() => State.getStatesOfCountry(form.country), [form.country]);
  const cityOptions = useMemo(() => City.getCitiesOfState(form.country, form.state), [form.country, form.state]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <section className="public-page">
      <div className="public-container">
        <div className="register-card">
          <h2 className="register-title">Update Profile</h2>
          <form className="register-form" noValidate>
            <div className="register-grid">
              {/* Personal Details */}
              <div className="register-field">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} type="text" placeholder="Full Name" />
              </div>
              <div className="register-field">
                <label htmlFor="mobile">Mobile</label>
                <input id="mobile" name="mobile" value={form.mobile} onChange={handleChange} type="tel" placeholder="Mobile" />
              </div>
              <div className="register-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" />
              </div>
              <div className="register-field">
                <label htmlFor="dob">DOB</label>
                <input id="dob" name="dob" value={form.dob} onChange={handleChange} type="date" placeholder="DOB" />
              </div>
              <div className="register-field register-full-row">
                <label htmlFor="address">Address</label>
                <input id="address" name="address" value={form.address} onChange={handleChange} type="text" placeholder="Address" />
              </div>
              <div className="register-field">
                <label htmlFor="city">City</label>
                <input id="city" name="city" value={form.city} onChange={handleChange} type="text" placeholder="City" />
              </div>
              <div className="register-field">
                <label htmlFor="state">State</label>
                <select id="state" name="state" value={form.state} onChange={handleChange}>
                  <option value="">Select</option>
                  {stateOptions.map((s) => (
                    <option key={s.isoCode} value={s.isoCode}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div className="register-field">
                <label htmlFor="country">Country</label>
                <select id="country" name="country" value={form.country} onChange={handleChange}>
                  <option value="">Select</option>
                  {countryOptions.map((c) => (
                    <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div className="register-field">
                <label htmlFor="pincode">Pincode</label>
                <input id="pincode" name="pincode" value={form.pincode} onChange={handleChange} type="text" placeholder="Pincode" />
              </div>
              {/* Profile Image */}
              <div className="register-field register-full-row">
                <label htmlFor="image">Profile Image (300 KB max)</label>
                <input id="image" name="image" type="file" accept="image/*" onChange={handleChange} />
              </div>
              {/* Nominee Details */}
              <div className="register-field">
                <label htmlFor="nomineeName">Nominee Name</label>
                <input id="nomineeName" name="nomineeName" value={form.nomineeName} onChange={handleChange} type="text" placeholder="Nominee Name" />
              </div>
              <div className="register-field">
                <label htmlFor="nomineeRelation">Nominee Relation</label>
                <select id="nomineeRelation" name="nomineeRelation" value={form.nomineeRelation} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Son">Son</option>
                  <option value="Daughter">Daughter</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="register-field">
                <label htmlFor="nomineeAge">Nominee Age</label>
                <input id="nomineeAge" name="nomineeAge" value={form.nomineeAge} onChange={handleChange} type="number" placeholder="Nominee Age" />
              </div>
              <div className="register-field">
                <label htmlFor="nomineeMobile">Nominee Mobile</label>
                <input id="nomineeMobile" name="nomineeMobile" value={form.nomineeMobile} onChange={handleChange} type="tel" placeholder="Nominee Mobile" />
              </div>
            </div>
            <button type="submit" className="register-submit-btn">Update</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default UpdateProfile;
