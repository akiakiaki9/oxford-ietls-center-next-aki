'use client';
import React, { useState, useRef, useEffect } from 'react';
import IMask from 'imask';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        tel: '',
        age: '',
        gender: '',
        examType: '',
        body: ''  // Поле для дополнительной информации
    });
    const telInputRef = useRef(null);

    useEffect(() => {
        const maskOptions = {
            mask: '+{998}(00)000-00-00',
        };
        const mask = IMask(telInputRef.current, maskOptions);

        return () => {
            mask.destroy();
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="registration">
            <form
                name="registration-form"  // Указываем имя формы для Netlify
                method="POST"              // Используем метод POST
                data-netlify="true"         // Активируем Netlify Forms
                data-netlify-recaptcha="true" // Включаем поддержку reCAPTCHA от Netlify
            >
                {/* Honeypot Field (Netlify будет игнорировать отправки, если это поле заполнено) */}
                <input type="hidden" name="form-name" value="registration-form" />
                <p style={{ display: 'none' }}>
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </p>

                <div className="registration-form__blok registration-form__blok-1">
                    <div className="registration-form__blok-container">
                        <label htmlFor="firstName">Name</label>
                        <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="registration-form__blok-container">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="registration-form__blok-container">
                        <label htmlFor="tel">Phone</label>
                        <input
                            id="tel"
                            type="tel"
                            name="tel"
                            ref={telInputRef}
                            value={formData.tel}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>

                <div className="registration-form__blok">
                    <div className="registration-form__blok-container">
                        <label htmlFor="age">Age</label>
                        <input
                            id="age"
                            type="number"
                            name="age"
                            min="1"
                            value={formData.age}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="registration-form__blok-container">
                        <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="" disabled>Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="registration-form__blok-container">
                        <label htmlFor="examType">Exam</label>
                        <select
                            id="examType"
                            name="examType"
                            value={formData.examType}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="" disabled>Select exam</option>
                            <option value="IELTS">IELTS</option>
                            <option value="CEFR">CEFR</option>
                        </select>
                    </div>
                </div>

                <div className="registration-form__blok-container">
                    <label htmlFor="body">Additional information</label>
                    <textarea
                        id="body"
                        name="body"
                        rows="4"
                        value={formData.body}
                        onChange={handleInputChange}
                    ></textarea>
                </div>

                {/* Google reCAPTCHA */}
                <div data-netlify-recaptcha="true"></div>

                <br />
                <button className='registration__submit' type="submit">Submit</button>
            </form>
        </div>
    );
};
