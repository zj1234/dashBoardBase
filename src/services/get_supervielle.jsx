
import { api } from '../common/globals';


export const getSupervielle = (objetive,user, begin, final) => 
        fetch(api+`/reporte/especial/getVRSupervielle/?user=${user}&begin=${begin}&final=${final}&objetive=${objetive}`)
        .then(response => response.json())
