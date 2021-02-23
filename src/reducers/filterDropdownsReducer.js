export default (state = {brandsOpen: false, classOpen: false, decadesOpen: false, shiftersOpen: false}, action) => {
    switch (action.type) {
        case 'OPEN_BRANDS':
            return { ...state, brandsOpen: action.payload };
        case 'OPEN_CLASS': 
            return { ...state, classOpen: action.payload };
        case 'OPEN_DECADES':
            return { ...state, decadesOpen: action.payload };
        case 'OPEN_SHIFTERS':
            return { ...state, shiftersOpen: action.payload };
        default:
            return state;
    }
}