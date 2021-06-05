import http from "../http-common"

const getAll = () => {
    return http.get("/user")
}

const get = id => {
    return http.get(`/user/${id}`)
}

const create = data => {
    return http.post("/user/", data)
}

const update = (id, data) => {
    return http.put(`/cliente/${id}`, data)
}

const remove = id => {
    return http.delete(`/user/${id}`)
}

export default {
    getAll,
    get,
    create,
    update, 
    remove
}
