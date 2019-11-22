export default class QuizService {
    async getResource(url) {
        const res = await fetch(`${url}`);

        if(!res.ok) {
            throw new Error(`${url} \n Status: ${res.status}`)
        }

        return await res.json();
    };

    getQuiz = async () => {
        return await this.getResource('https://gtiw.gtinvest.com:44300/api/QuizPassings/GetById?passingId=D4FCA825-9E5C-400E-B653-E37581262524');
    }
};