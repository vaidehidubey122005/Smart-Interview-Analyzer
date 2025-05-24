import React from 'react'
import { FormControl,FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import {Input} from "@/components/ui/input"
const FormField = ()=> (
    <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="vaidehi" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your unique username.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
);
export default FormField