// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// // @ts-ignore
// export const UserAvatar = ({ user, onSignOut }) => {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" className="flex items-center">
//           <Avatar>
//             <AvatarImage src={user.user_metadata.avatar_url || '/default-avatar.png'} alt="User Avatar" />
//             <AvatarFallback delayMs={600}>{user.email.charAt(0)}</AvatarFallback>
//           </Avatar>
//           {/* <span className="text-sm ml-2">{user.email}</span> */}
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-48">
//         <DropdownMenuGroup>
//           <DropdownMenuItem disabled>{user.email}</DropdownMenuItem>
//           <DropdownMenuItem onSelect={() => window.location.href = "/dashboard"}>Billing</DropdownMenuItem>
//           <DropdownMenuItem onSelect={onSignOut}>Sign out</DropdownMenuItem>
//         </DropdownMenuGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };


import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// @ts-ignore
export const UserAvatar = ({ user, onSignOut }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center">
          <Avatar>
            <AvatarImage 
              src={user.user_metadata.avatar_url || '/default-avatar.png'} 
              alt="User Avatar" 
            />
            <AvatarFallback delayMs={600}>
              {user.email.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuItem disabled>{user.email}</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => window.location.href = "/dashboard"}>
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onSignOut}>Sign out</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};