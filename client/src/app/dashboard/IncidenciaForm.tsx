'use client'
import React from "react";
import { useState } from "react"

function IncidenciaForm() {
    // async function createIncidencia(formData: FormData) {
        //     'use server'
        //     console.log()
        // }
        const [input, setInput] = useState({
            date: "",
            time: "",
            institucion: "",
            situacion: "",
            descripcion: "",
        });

    const handleChange = (e:any) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        console.log(input)
    }
    const submitIncidencia = async () =>{
        const response = await fetch('http://127.0.0.1:8000/api/projects/', {
            method: "POST",
            body: JSON.stringify({input}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json()
        console.log(data)
    }
        return (
            <>
        <form className="m-4 w-full flex flex-col items-stretch">
            <div className="mb-4 bg-blue-50/15 p-4 rounded-lg shadow-lg shadow-blue-700/35 ">
                <fieldset>
                    <legend>Selecciona el día de la incidencia:</legend>
                    <div className="grow">
                        <label className="text-white font-bold" htmlFor="date">Fecha:</label>
                        <br />
                        <input className="text-[#062557] font-bold" type="date" name="date" value={input.date} id="date" onChange={(e) => handleChange(e)} />
                    </div>
                </fieldset>
            </div>
            <div className="mb-4 bg-blue-50/15 p-4 rounded-lg shadow-lg shadow-blue-700/35">
                <fieldset>
                    <legend>Selecciona la hora de la incidencia:</legend>
                    <div className="grow">
                        <label className="text-white font-bold" htmlFor="time">Hora:</label>
                        <br />
                        <input className="text-[#062557] font-bold" type="time" name="time" id="time" value={input.time} onChange={(e) => handleChange(e)}/>
                    </div>
                </fieldset>
            </div>
            <div className="mb-4 bg-blue-50/15 p-4 rounded-lg shadow-lg shadow-blue-700/35 ">
                <fieldset>
                    <legend>Selecciona la institución en donde se da la incidencia:</legend>
                    <div className="grow">
                        <label className="text-white font-bold" htmlFor="opcion_Institucion">Institución:</label>
                        <br />
                        <select className="text-[#062557] font-bold" id="opcion_Institucion" name="institucion" value={input.institucion}onChange={(e) => handleChange(e)}>
                            <option value="Justo Sierra">Justo Sierra</option>
                            <option value="Querétaro">Querétaro</option>
                            <option value="Tennyson">Tennyson</option>
                            <option value="Panteón">Panteón</option>
                            <option value="San Sulpicio">San Sulpicio</option>
                            <option value="Huerta">Huerta</option>
                            <option value="Velatorio">Velatorio</option>
                            <option value="Palma">Palma</option>
                            <option value="Colegio">Colegio</option>
                            <option value="Toledo">Toledo</option>
                            <option value="Isla de Agua">Isla de Agua</option>
                            <option value="Olivos">Olivos</option>
                        </select>
                    </div>
                </fieldset>
            </div>
            <div className="mb-4 bg-blue-50/15 p-4 rounded-lg shadow-lg shadow-blue-700/35">
                <fieldset>
                    <legend>Selecciona la <strong>situación</strong> en donde se da la incidencia:</legend>
                    <div className="grow">
                        <label className="text-white font-bold" htmlFor="opcion_Situacion">Situación:</label>
                        <br />
                        <select className="text-[#062557] font-bold" id="opcion_Situacion" name="situacion" value={input.situacion} onChange={(e) => handleChange(e)}>
                            <option value="Indicación Ignorada">Indicación Ignorada</option>
                            <option value="Consigna no cumplida">Consigna no cumplida</option>
                            <option value="Visitante">Visitante</option>
                            <option value="Bulto en periferia">Bulto en periferia</option>
                            <option value="Bulto en interiores">Bulto en interiores</option>
                            <option value="Vehículo en periferia">Vehículo en periferia</option>
                            <option value="Manifestación">Manifestación</option>
                            <option value="Incendio">Incendio</option>
                        </select>
                    </div>
                </fieldset>
            </div>
            <div className="mb-4 bg-blue-50/15 p-4 rounded-lg shadow-lg shadow-blue-700/35 h-auto">
                <fieldset>
                    <legend>Describe la situación:</legend>
                    <div className="grow">
                        <label className="text-white font-bold" htmlFor="descripcion">Descripción:</label>
                        <br />
                        <textarea className="text-[#062557] font-bold w-full h-auto"  name="descripcion" maxLength={1000} minLength={20} placeholder="Detalla una decripción clara y breve de lo sucedido" id="descripcion" required={true} value={input.descripcion} onChange={(e) => handleChange(e)} />
                    </div>
                </fieldset>
            </div>
            <button type="submit" onClick={submitIncidencia} className="mb-4 p-2 bg-yellow-500/70 rounded-lg shadow-lg shadow-blue-700/35">Guardar</button>
        </form>
        </>

    )
}

export default IncidenciaForm