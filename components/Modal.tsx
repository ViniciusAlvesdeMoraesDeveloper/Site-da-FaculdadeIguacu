import React, { useState } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { name: string; email: string; course: string }) => void;
    courses: string[];
    children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, courses }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState(courses[0] || '');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ name, email, course });
        setName('');
        setEmail('');
        setCourse(courses[0] || '');
        onClose();
    };

    const modalContent = (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000
        }}>
            <div style={{
                background: '#fff',
                padding: 24,
                borderRadius: 8,
                minWidth: 320,
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}>
                <h2>Inscreva-se no Curso</h2>
                <form onSubmit={handleSubmit}>
                    {/* ...seu formulário... */}
                    <div style={{ marginBottom: 12 }}>
                        <label>
                            Nome:
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                                style={{ width: '100%', padding: 8, marginTop: 4 }}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: 12 }}>
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                style={{ width: '100%', padding: 8, marginTop: 4 }}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: 12 }}>
                        <label>
                            Curso:
                            <select
                                value={course}
                                onChange={e => setCourse(e.target.value)}
                                required
                                style={{ width: '100%', padding: 8, marginTop: 4 }}
                            >
                                {courses.map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                        <button type="button" onClick={onClose}>Cancelar</button>
                        <button type="submit">Enviar Inscrição</button>
                    </div>
                </form>
            </div>
        </div>
    );

    return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;