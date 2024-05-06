import{ connect} from "@/database/dbConnection"
import User from "@/models/userModel";
import { NextRequest, NextResponse  } from "next/server";
import bcryptjs from "bcryptjs";
connect();

export async function POST (req: NextRequest){

    try{
        const body = await req.json();
        const {username, email, password} =body;
        let user = await User.findOne({email});
        if(user)
            return NextResponse.json({error:"User already exist"},{status:404})

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword= await bcryptjs.hash(password,salt)
        user = await User.create({
            username,
            email,
            password: hashedPassword
        })
        
        return NextResponse.json({ message: 'Signup successful'});
    }
      
    catch (error:any){
        console.error('Error during signup:', error);
        return NextResponse.json({error: error.message}, {status:500})

        

    }
}





