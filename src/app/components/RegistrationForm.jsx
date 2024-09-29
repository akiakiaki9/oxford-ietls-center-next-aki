'use client';

import React, { useState, useEffect, useRef } from 'react';
import IMask from 'imask';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        tel: '',
        age: '',
        gender: '',
        examType: '',
        body: ''  // Новое поле для текста
    });
    const [lastSubmissionTime, setLastSubmissionTime] = useState(null);
    const telInputRef = useRef(null);

    useEffect(() => {
        // Инициализация маски для ввода телефона
        const maskOptions = {
            mask: '+{998}(00)000-00-00',
        };
        const mask = IMask(telInputRef.current, maskOptions);

        // Загрузка скрипта reCAPTCHA
        const loadRecaptcha = () => {
            const script = document.createElement('script');
            script.src = 'https://www.google.com/recaptcha/enterprise.js?render=6LdgX1IqAAAAAEx0uuY5R9D0IckDyKSBhm65tD6w';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        };

        loadRecaptcha();

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

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Получаем токен reCAPTCHA
        const token = await new Promise((resolve) => {
            window.grecaptcha.enterprise.ready(() => {
                window.grecaptcha.enterprise.execute('6LdgX1IqAAAAAEx0uuY5R9D0IckDyKSBhm65tD6w', { action: 'submit' }).then(resolve);
            });
        });

        // Проверка времени последней отправки формы
        const currentTime = new Date().getTime();

        // Если lastSubmissionTime еще не установлено, просто продолжите
        if (lastSubmissionTime) {
            if (currentTime - lastSubmissionTime < 30 * 60 * 1000) {
                alert('Please try again in 30 minutes.');
                return;
            }
        }

        try {
            const response = await fetch("https://formspree.io/f/mpwaljag", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...formData, "g-recaptcha-response": token })
            });

            if (response.ok) {
                alert('Thanks for registration!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    tel: '',
                    age: '',
                    gender: '',
                    examType: '',
                    body: ''  // Сбрасываем поле body
                });
                setLastSubmissionTime(currentTime); // Обновляем время последней отправки
            } else {
                alert('Error submitting form.');
            }
        } catch (err) {
            console.error(err);
            alert('Error submitting form.');
        }
    };

    return (
        <>
            <div className="registration">
                <form
                    onSubmit={handleFormSubmit}
                    name="registration-form"
                    method="POST"
                >
                    {/* Honeypot Field */}
                    <input type="text" name="_gotcha" style={{ display: 'none' }} />

                    <div className="registration-form__blok registration1-form__blok-1">
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

                    {/* Поле для ввода текста */}
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
                    <br />
                    <button className='registration__submit' type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};