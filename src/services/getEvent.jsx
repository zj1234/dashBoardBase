
import {api_auth,  api_host, token } from '../common/constants'
export const getEvents = (objective, beginTime, finalTime) => 
        fetch(api_host+`/reporte/online/eventos/Reporte3Events/?user=1&key=${api_auth}&objetive=${objective}&datebegin=${beginTime}&finaldate=${finalTime}&hash=3276bd408a114308ab00c6133fe29fb2&token=${token}`)
        .then(response => response.json())
