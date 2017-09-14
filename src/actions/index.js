export const addPlace = place => {
	return {
		type: "ADD_PLACE",
		id: Date.now(),
		title: place.title,
		description: place.description,
		videolink: place.videolink,
		coordX: place.coordX,
		coordY: place.coordY,
		phone: place.phone,
		email: place.email
	};
};

export const updatePlace = (id, place) => {
	return {
		type: "UPDATE_PLACE",
		id: Date.now(),
		title: place.title,
		description: place.description,
		videolink: place.videolink,
		coordX: place.coordX,
		coordY: place.coordY,
		phone: place.phone,
		email: place.email
	};
};

export const deletePlace = id => {
    return {
        type: 'DELETE_PLACE',
        id
    };
};

export const createPlace = () => {
		return {
    		type: 'CREATE_PLACE'
		};
};

export const currentPlace = id => {
		return {
    		type: 'CURRENT_PLACE',
				id
		};
};

export const toggleModal = () => {
		return {
    		type: 'TOGLLE_MODAL'
		};
};
