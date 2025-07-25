
import { Company } from "../models/company.model.js";  

export const registerCompany=async (req,res)=>{
      console.log(req);
    try {
         const {companyName}=req.body;
         if(!companyName){
            return res.status(400).json({
                message:"Company name is required.",
                success:false
            });
         }
         let company=await Company.findOne({name:companyName});
         if(company){
              return res.status(400).json({
                 message:"You can not register same company",
                 success:false
              })
         };
         company=await Company.create({
             name:companyName,
             userId:req.id
         })
         
         return res.status(201).json({
             message:"Company created successfully",
              company,
             succedd:true
         })
        
    } catch (error) {
         console.log(error);
         
        
    }
}

export const getCompany=async (req,res)=>{
     try {
        const userId=req.id;  //logged in user id:
         const companies=await Company.find({userId});
         if(!companies){
              return res.status(404).json({
             message:"Company not found ",
             succedd:false
         })
         }
          return res.status(200).json({
             companies,
             succedd:true
          });

        
     } catch (error) {
        console.log(error);
        
     }
}

export const getCompanyById=async(req,res)=>{
    try {
         const companyId=req.params.id;
           const company=await Company.findById(companyId)
           if(!company){
              return res.status(404).json({
             message:"Company not found ",
             succedd:false
         })
           }
           return res.status(200).json({
              company,
              success:true
           })


    } catch (error) {
          console.log(error);
    }
}

export const updateCompany =async (req,res)=>{
      try {
         const {name ,description,website,location}=req.body;
         const file=req.file;
         //idhar cloudary add hoga

         const updateData={name ,description,website,location};

         const company=await Company.findByIdAndUpdate(req.params.id, updateData,{new:true});

        if(!company){
              return res.status(404).json({
             message:"Company not found ",
             succedd:false
         })
           }
       
              return res.status(200).json({
              message:"Company information updated",
              success:true
           })


      } catch (error) {
        console.log(error);
      }
}
