import {pool} from "../database/database.js"

export default {
    
    /**
     * 
     * @param {import ("express").Request} req 
     * @param {import ("express").Response} res 
     */

    create: async function  (req,res) {
        try {
        
        const { email,senha,nome,dataNascimento } = req.body
        
        if (!(email && senha && nome && dataNascimento)){
            return res.status(400).json({message:'Os campos são obrigatorios'})
        }

        const RES_DATABASE = await pool.query('INSERT INTO "USUARIO"("nome","email","senha","dataNascimento") VALUES($1,$2,$3,$4) RETURNING *',[nome,email,senha,dataNascimento])      
        
        const dbData = RES_DATABASE.rows[0]

        if (!dbData) {
            throw new Error('Não foi inserido')
        }
            
        return res.json({message:"sucesso"})
        } catch (error) {
        return res.status(500).json({error})
        }
    }

}