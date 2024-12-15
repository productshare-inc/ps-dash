import { UserProps } from "@repo/ts-types/home/v1";
import { Avatar, AvatarFallback, AvatarImage } from "../../../atoms/shadcn/avatar";
import { useRef, useState } from "react";
import { CameraIcon } from "lucide-react";
import { Input } from "../../../atoms/shadcn/input";
import { FloatingLabelInput } from "../../../molecules/shadcn/floating-label-input";
import { Button } from "../../../atoms/shadcn/button";
  
  const MyAccountSettings = ({userid,username,email,avatar,modifyAvatar,modifyEmail,modifyName,modifyPassword,deleteAccount}:UserProps) => {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState(username);
    const [currentEmail, setCurrentEmail] = useState(email);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleAvatarClick = () => {
      console.log("Avatar clicked");
      inputFileRef.current?.click(); // Programmatically open file input
    };
    return (
        <div className="my-10 px-10 overflow-auto scrollbar scrollbar-track-secondary scrollbar-thumb-sidebar">
            <div className="text-emphasis ">My Profile</div>
            <div className= "text-description pb-2 border-b-2">For modifying Email, you need to verify your new email address</div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center ">
                <div className="text-description mt-4">Profile Pic</div>
                <div className="relative group cursor-pointer">
                  <Avatar className="h-20 w-20 rounded-full border-2 bg-secondary hover:bg-accent2">
                    <AvatarImage src={avatar?? ''} alt={username ?? ''} />
                    <AvatarFallback className="text-3xl">{username?username[0]?.toUpperCase() :'U'}</AvatarFallback>
                  </Avatar>
                  <div onClick={handleAvatarClick} className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <div><CameraIcon/></div>
                    <div className="text-xs">Upload Photo</div>
                  </div>
                </div>
                    {/* Hidden file input */}
                <input
                  ref={inputFileRef}
                  type="file"
                  className="hidden"
                  accept="image/*" // Accept only images
                  onChange={(e)=>modifyAvatar && modifyAvatar(userid,e)} // Handle file selection
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 mt-4">
              <FloatingLabelInput id="name" label="Username" className="w-full my-2" defaultValue={username} 
              onChange={(e)=>{setName(e.target.value)}}/>
              <Button onClick={()=>modifyName(userid,name as string)} className="w-1/4">Update Username</Button>
            </div>
            <div className="flex items-center justify-between gap-4 mt-4">
              <FloatingLabelInput id="email" label="Email" className="flex-grow-1 my-2" defaultValue={email} type="email"
              onChange={(e)=>{setCurrentEmail(e.target.value)}}/>
              <Button onClick={()=>{}} className="w-1/4" >Verify New Email Address</Button>
            </div>
            <div className="text-emphasis mt-10"> Change Password</div>
            <div className= "text-description pb-2 border-b-2">Make sure it's atleast 6 characters</div>
            <div className="flex flex-col gap-4 mt-4 w-1/2">
              <FloatingLabelInput id="new password" label="New Password" type="password" className="w-full my-2"
              onChange={(e)=>{setPassword(e.target.value)}}/>
              <FloatingLabelInput id="confirm password" label="Confirm Password" type="password" className="w-full my-2"
              onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
              <Button onClick={()=>{}} className="w-1/2">Modify Password</Button>
            </div>
            <div className="text-emphasis mt-10"> Delete Account</div>
            <div className= "text-description pb-2 border-b-2">Once you delete your account and account data, there is no going back.</div>
            <div className="flex flex-col gap-4 mt-4 w-1/2">
              <FloatingLabelInput id="permanently delete" label="Type 'permanently delete'" type="name" className="w-full my-2"
              onChange={()=>{}}/>
              <Button variant="destructive" onClick={()=>{}} className="w-1/2">Delete Account</Button>
            </div>
            <div className="text-emphasis border-b-2 pb-4 mt-10"> Account Security</div>
        </div>
    );
  };

  export default MyAccountSettings;