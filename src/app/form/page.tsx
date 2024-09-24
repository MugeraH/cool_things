import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { z } from "zod";
type Props = {};

const userFormSchema = z.object({
  //    optional() --makes property optional
  //    nullable()-- accepts null as valid value
  //    nullish()-- accepts null and undefined
  firstName: z.string().optional(),
  email: z.string().email(),
  profileUrl: z.string().url(),
  age: z.number().min(18),
  friends: z.array(z.string()).max(3),
  settings: z.object({
    isSubscribed: z.boolean(),
  }),
});

type UserForm = z.infer<typeof userFormSchema>;
// const user = {
//   firstName: "Hughes",
//   email: "contact@gmail.com",
//   profileUrl: "https://google.com",
//   age: 18,
//   friends: ["frnd 1", "frnd 2", "frnd 3"],
//   settings: {
//     isSubscribed: true,
//   },
// };

function SampleForm({}: Props) {
  // const form = useForm<UserForm>({
  //   resolver:zodResolver(userFormSchema)
  // });
  return <div>SampleForm</div>;
}

export default SampleForm;
