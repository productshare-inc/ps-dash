import { UserProps } from "@repo/ts-types/auth/v1";
import { Avatar, AvatarFallback, AvatarImage } from "../../../atoms/shadcn/avatar";
import { Button } from "../../../atoms/shadcn/button";


  
  const MyAccountSettings = ({name,email,image}:UserProps) => {
    return (
        <div className="my-10 mx-20">
            <div className="text-emphasis border-b-2 pb-4"> My Profile</div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center ">
                <Avatar className="h-16 w-16 rounded-full border-2 bg-secondary hover:bg-accent2 cursor-pointer">
                  <AvatarImage src={image ?? ''} alt={name ?? ''} />
                  <AvatarFallback className="text-3xl">{name?name[0]?.toUpperCase() :'U'}</AvatarFallback>
                </Avatar>
                <div className="text-description">Add Photo</div>
              </div>
            </div>
        </div>
    );
  };

  export default MyAccountSettings;