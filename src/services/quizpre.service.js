import http from "../http-common";

class QuizPreDataService {
  getAll() {
    return http.get("/quizpres/all");
  }

  create(data) {
    return http.post("/quizpres/add", data);
  }

  update(id, data) {
    return http.put(`/quizpres/${id}`, data);
  }

  delete(id) {
    return http.delete(`/quizpres/${id}`);
  }
}

export default new QuizPreDataService();