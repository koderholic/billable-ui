import axios from 'axios';

export const Component = {
    render() {
        return this.$scopedSlots.default(this.$attrs)
    }
}

export const HTTP = axios.create({
	headers: {
		"Content-Type" : "multipart/form-data"
	}
})

