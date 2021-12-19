
import {api_host} from '../common/constants'
export const getTimeResponseGlobal = (objective, begin, final, monitores) => 
    fetch(api_host+`/reporte/especial/ResponseTotalObjective/?user=1&begin=${begin}&final=${final}&objective=${objective}&monitores=${monitores}`)
            .then(response => response.json())
