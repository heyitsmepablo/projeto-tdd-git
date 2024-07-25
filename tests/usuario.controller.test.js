import supertest from "supertest";
import app from "../src/index.js";

describe('POST usuario/novaConta : METHOD create', ()=>{

    it('Pass 200: O usuario deve ser criado',async ()=>{
        const body = {
            nome: 'Pablo',
            email: 'p@p.com',
            senha: '123',
            dataNascimento: '1997-09-05'
        } 

        const res = await supertest(app)
        .post('/usuario/novaConta')
        .send(body)
        .expect((res)=>{
            const {status,body} = res
            
            if (status != 200){
                throw new Error(`Esperado 200, Recebido ${status} ( Body: ${JSON.stringify(body)} )`)
            }
        })

    })

})