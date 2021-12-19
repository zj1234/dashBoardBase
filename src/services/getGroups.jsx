
import { api_host, token } from '../common/constants'
export const getGroup = (objective) => 
        fetch(api_host+`/reporte/online/indicadores/getEspecialFalabella/?objective=${objective}&token=${token}`)
        .then(response => response.json())
