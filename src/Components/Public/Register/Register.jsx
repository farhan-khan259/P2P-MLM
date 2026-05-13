import { useMemo, useState } from 'react';
import { City, Country, State } from 'country-state-city';
import { getDistricts } from 'india-state-district';
import PublicPageHeader from '../Common/PublicPageHeader';
import './Register.css';

const INDIA_COUNTRY_CODE = 'IN';
const joiningPackageOptions = [
  'Elcon Anion Sanitary Pads - 8',
  'Elcon Anion Sanitary Pads - 32',
  'Elcon Diabe Care - 8',
  'Elcon Omega -3',
  'Elcon Calcium',
  'Elcon Smart Watch',
  'Foce Watch',
  'Gold Head Phone',
  'Bose Head Phonos',
  'HP LAPTOP'
];

function Register() {
  const [country, setCountry] = useState(INDIA_COUNTRY_CODE);
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');

  const countryOptions = useMemo(() => Country.getAllCountries(), []);

  const stateOptions = useMemo(() => {
    if (!country) return [];
    return State.getStatesOfCountry(country);
  }, [country]);

  const districtOptions = useMemo(() => {
    if (!country || !state) return [];

    if (country === INDIA_COUNTRY_CODE) {
      return getDistricts(state);
    }

    const cityNames = City.getCitiesOfState(country, state).map((item) => item.name);
    return [...new Set(cityNames)];
  }, [country, state]);

  const cityOptions = useMemo(() => {
    if (!country || !state) return [];
    return City.getCitiesOfState(country, state);
  }, [country, state]);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    setState('');
    setDistrict('');
    setCity('');
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
    setDistrict('');
    setCity('');
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
    setCity('');
  };

  return (
    <div>
      <PublicPageHeader title="Registration" />
      <section className="public-page">
        <div className="public-container">
          <div className="register-card">
            <h2 className="register-title">Registration Form</h2>

            <form className="register-form" noValidate>
              <div className="register-grid">
                <div className="register-field">
                  <label htmlFor="sponsorId">
                    Sponsor ID <span className="register-required">*</span>
                  </label>
                  <input id="sponsorId" type="text" placeholder="Enter sponsor ID" />
                </div>

                <div className="register-field">
                  <label htmlFor="sponsorName">Sponsor Name</label>
                  <input id="sponsorName" type="text" placeholder="Enter sponsor name" />
                </div>

                <div className="register-field register-full-row">
                  <label htmlFor="applicantName">
                    Applicant Name <span className="register-required">*</span>
                  </label>
                  <input
                    id="applicantName"
                    type="text"
                    placeholder="Enter applicant's name as per Addharcard"
                  />
                </div>

                <div className="register-field">
                  <label htmlFor="contactNo">
                    Contact No <span className="register-required">*</span>
                  </label>
                  <input id="contactNo" type="tel" placeholder="Enter contact number" />
                </div>

                <div className="register-field">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input id="dateOfBirth" type="date" />
                </div>

                <div className="register-field">
                  <label htmlFor="email">
                    Email <span className="register-required">*</span>
                  </label>
                  <input id="email" type="email" placeholder="Enter your email address" />
                </div>

                <div className="register-field">
                  <label htmlFor="aadharNo">
                    Aadhaar No <span className="register-required">*</span>
                  </label>
                  <input id="aadharNo" type="text" placeholder="Enter Aadhar number" />
                </div>

                <div className="register-field register-full-row">
                  <label htmlFor="address">Address</label>
                  <textarea id="address" rows="3" placeholder="Enter your address" />
                </div>

                <div className="register-field">
                  <label htmlFor="country">Country</label>
                  <select id="country" value={country} onChange={handleCountryChange}>
                    {countryOptions.map((countryOption) => (
                      <option key={countryOption.isoCode} value={countryOption.isoCode}>
                        {countryOption.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="register-field">
                  <label htmlFor="state">State</label>
                  <select
                    id="state"
                    value={state}
                    onChange={handleStateChange}
                    disabled={!country}
                  >
                    <option value="" disabled>
                      Select state
                    </option>
                    {stateOptions.map((stateOption) => (
                      <option key={stateOption.isoCode} value={stateOption.isoCode}>
                        {stateOption.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="register-field">
                  <label htmlFor="district">District</label>
                  <select
                    id="district"
                    value={district}
                    onChange={handleDistrictChange}
                    disabled={!state}
                  >
                    <option value="" disabled>
                      {!state ? 'Select state first' : 'Select district'}
                    </option>
                    {districtOptions.map((districtOption) => (
                      <option key={districtOption} value={districtOption}>
                        {districtOption}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="register-field">
                  <label htmlFor="city">City</label>
                  <select
                    id="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    disabled={!state}
                  >
                    <option value="" disabled>
                      {!state ? 'Select state first' : 'Select city'}
                    </option>
                    {cityOptions.map((cityOption) => (
                      <option
                        key={`${cityOption.name}-${cityOption.latitude}-${cityOption.longitude}`}
                        value={cityOption.name}
                      >
                        {cityOption.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="register-field">
                  <label htmlFor="pincode">Pincode</label>
                  <input id="pincode" type="text" placeholder="Enter your pincode" />
                </div>

                <div className="register-field">
                  <label htmlFor="joiningPackage">
                    Joining Package <span className="register-required">*</span>
                  </label>
                  <select id="joiningPackage" defaultValue="">
                    <option value="" disabled>
                      Select Joining Package
                    </option>
                    {joiningPackageOptions.map((packageName) => (
                      <option key={packageName} value={packageName}>
                        {packageName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="register-field register-lock-field">
                  <label htmlFor="epin">
                    E Pin <span className="register-required">*</span>
                  </label>
                  <input id="epin" type="text" placeholder="Enter E pin" />
                  <span className="register-lock-icon" aria-hidden="true">
                    🔒
                  </span>
                </div>

                <div className="register-field register-lock-field">
                  <label htmlFor="password">
                    Password <span className="register-required">*</span>
                  </label>
                  <input id="password" type="password" placeholder="Enter your password" />
                  <span className="register-lock-icon" aria-hidden="true">
                    🔒
                  </span>
                </div>

                <div className="register-field register-lock-field">
                  <label htmlFor="confirmPassword">
                    Confirm Password <span className="register-required">*</span>
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Re-enter your password"
                  />
                  <span className="register-lock-icon" aria-hidden="true">
                    🔒
                  </span>
                </div>
              </div>

              <label className="register-terms">
                <input type="checkbox" /> I agree to the <a href="/">Terms &amp; Conditions.</a>
              </label>

              <button type="submit" className="register-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
