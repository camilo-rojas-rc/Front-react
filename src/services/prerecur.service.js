import http from "../http-common";

class PreRecurDataService {
  getAll() {
    return http.get("/prerecurs/all");
  }

  create(data) {
    return http.post("/prerecurs/add", data);
  }

  update(id, data) {
    return http.put(`/prerecurs/${id}`, data);
  }

  delete(id) {
    return http.delete(`/prerecurs/${id}`);
  }
}

export default new PreRecurDataService();