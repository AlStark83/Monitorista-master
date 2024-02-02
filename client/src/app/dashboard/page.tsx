import { getXataClient } from '@/xata';
import React from 'react'
import IncidenciaForm from './IncidenciaForm';

export default async function DashboardPage() {
  const xataClient = getXataClient();
  const incidencias = await xataClient.db.incidencia.getMany();
  return <div className=' w-5/6 sm:w-360 md:w-720'>
    <h1>Dashboard Page</h1>
    <IncidenciaForm />
    <div className='mb-10'>
      {incidencias.map(incidencia => <p key={incidencia.id}>{incidencia.institucion}</p>)}
    </div>
  </div>
}