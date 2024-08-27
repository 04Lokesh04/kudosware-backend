const express=require('express')
const multer=require('multer')
const path=require('path')
const cors=require('cors')
const connectDb=require('./db')
const User=require('./user')

const app=express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

connectDb()

const storage=multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'uploads/')
    },

    filename:(req, file, cb)=>{
        cb(null, Date.now()+'-'+file.originalname)
    }
})

const uploading=multer({storage})

app.post('/signup', uploading.single('resume'), async (req, res)=>{
    const {name, email, phone}=req.body
    const resume=req.file?req.file.path:""
    try{
        const newUser= new User({
            name, 
            email, 
            phone,
            resume
        })
        await newUser.save()
        res.status(200).json({ message: 'Signup successful' })
    }
    
    catch(error){
        res.status(500).json({ message: 'Signup failed', error })
    }
})

const PORT=process.env.PORT||5000
app.listen(PORT, ()=>console.log("server running on port 5000"))