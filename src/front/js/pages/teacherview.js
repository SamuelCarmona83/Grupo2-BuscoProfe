import React, { useEffect, useContext, useState } from "react";
import '../../styles/teacherView.css';
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

function TeacherView() {
    const { actions, store } = useContext(Context);
    const { id } = useParams();

    const [price, setPrice] = useState(null); // Estado del precio actual
    const [isEditing, setIsEditing] = useState(false); // Estado para alternar entre vista y edición
    const [newPrice, setNewPrice] = useState(""); // Estado para el nuevo precio

    useEffect(() => {
        actions.getTeacherById(id);
    }, [id, actions]);

    useEffect(() => {
        if (store.teacher.price !== undefined) {
            setPrice(store.teacher.price); 
            setNewPrice(store.teacher.price); // Establece el precio actual como nuevo precio por defecto
        }
    }, [store.teacher.price]);

    const handleSave = () => {
        if (newPrice === "" || isNaN(newPrice) || Number(newPrice) <= 0) {
            alert("Por favor, ingresa un precio válido.");
            return;
        }
        setPrice(newPrice); 
        setIsEditing(false); 
        actions.updateTeacherPrice(id, newPrice); 
    };
    

    return (
        <div className="view-container">
            <div className="profile-card">
                <div className="profile-pic">
                    <img
                        src={store.teacher.image}
                        className="card-img-top rounded-circle"
                        alt={store.teacher.name}
                        style={{ width: "50%" }}
                    />
                </div>

                <div className="profile-info">
                    <div className="user-info">
                        <h2>{store.teacher.name}</h2>
                        <h4>{store.teacher.level}</h4>
                    </div>
                </div>

                <section className="calificaciones">
                    <span className="teacher-name">Calificación</span>
                    <div className="rating m-2">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star text-secondary">★</span>
                    </div>
                </section>

                <div className="contact-info">
                    <div className="row">
                        <div className="icon">
                            <i className="fa fa-envelope-open" />
                        </div>
                        <div className="content">
                            <span>Email</span>
                            <h5>{store.teacher.email}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about">
                <h1>About Me</h1>
                <p>{store.teacher.description}</p>
                <div>
                    <h4>Especializaciones</h4>
                    {store?.teacher?.subjects?.length > 0 ? (
                        store.teacher.subjects.map((item, index) => (
                            <button
                                type="button"
                                key={index}
                                className="btn btn-light"
                            >
                                {item.name}
                            </button>
                        ))
                    ) : (
                        <p>Sin especializaciones</p>
                    )}
                </div>
            </div>

            <div>
                <div className="comments-card">
                    <h3>Comentarios</h3>
                    <div className="comments-list">
                        <div className="comment-item">Muy buen profe 😀</div>
                        <div className="comment-item">Un capo</div>
                        <div className="comment-item">No me gusta cuando canta👌</div>
                        <div className="comment-item">Excelente</div>
                        <div className="comment-item">Muy útil, gracias.🤩</div>
                        <div className="comment-item">✅</div>
                    </div>
                </div>

                <div className="price-card">
                    <div className="card-body">
                        <h5 className="card-title">Precio de las Clases</h5>
                        {isEditing ? (
                            <div>
                                <input
                                    type="number"
                                    className="input-field"
                                    value={newPrice}
                                    onChange={(e) => setNewPrice(e.target.value)}
                                />
                                <button onClick={handleSave}>Guardar</button>
                                <button onClick={() => setIsEditing(false)}>Cancelar</button>
                            </div>
                        ) : (
                            <div>
                                <p className="card-text">$ {price} x hr.</p>
                                <button onClick={() => setIsEditing(true)}>Modificar</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherView;
