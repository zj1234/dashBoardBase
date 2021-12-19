
import {api_host, token } from '../common/constants'

export const getScreenshot = (objective, tokenStep, service) =>
    fetch(`${api_host}/reporte/general/objetivos/${objective}/screenshots/image/?token=${token}&img_token=${tokenStep}&thumbnail=f&service=${service}&form=jpeg&base64=t`)
    .then(res => res.json())
