import {initiatives} from '@/data/initiatives'
import {toPath, undoPath} from '@/lib/utils'

export const getInitiative = (initiativeName:string) => {

    //const initiative = initiatives.find(item => item.title === initiativeName)
    // check if the regular initiitive name is used
    //then check if the path version of the initiative name is used

    let project = initiatives.find(item => item.title === initiativeName || toPath(item.title) === initiativeName);

    return project ;
}

export default getInitiative;