
import {api_host, token } from '../common/constants'

export const getListScreenshot = (objective, beginTime, finalTime, monitor) =>
    
    fetch(`${api_host}/reporte/general/objetivos/${objective}/screenshots/list_images/?token=${token}&fecha_inicio=${beginTime}&fecha_termino=${finalTime}&monitor=${monitor}`)
    .then(response => response.json())     
