'use client'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { sellerRegistrationschema } from '@/schema/changeToSeller';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { switchRole } from '@/requests/user';
import Cookies from 'js-cookie';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export const ChangeRole = () => {

    const router = useRouter();

    const form = useForm<z.infer<typeof sellerRegistrationschema>>({
        resolver: zodResolver(sellerRegistrationschema),
        defaultValues: {
          userId: "",
          avatarUrl: "",
          switchToRole: "",
          description: ""
        },
    });

    const accessToken = Cookies.get("accessToken");

    async function onSubmit(values: z.infer<typeof sellerRegistrationschema>) {
        const switchingRole = await switchRole(values, accessToken);

        if (!switchingRole) {
            toast('Change Role Failed', {
                description: new Date().toISOString().split('T')[0],
                action: { label: 'Close', onClick: () => '' },
            });
        } else {
            toast('Change Role Success', {
                description: new Date().toISOString().split('T')[0],
                action: { label: 'Close', onClick: () => '' },
            });

            router.push("/");
        }
    };
    

    return (
        <section className="flex justify-center items-center pt-8 py-20">
      <div className="flex flex-col items-left min-w-[30%] px-7 py-6 border-border border-2 rounded-md shadow-md bg-white">
        <h1 className="font-normal text-xl font-sans mb-6">
            To be a seller
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 w-full flex flex-col"
          >
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User ID</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your userId"
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Decription</FormLabel>
                  <FormControl>
                    <Input
                      className="border ring-primary"
                      placeholder="Enter your store description"
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="switchToRole"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Switch To</FormLabel>
                  <FormControl>
                  <Select
                  onValueChange={(val) => {
                    field.onChange(val);
                  }}
                  value={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SELLER">Seller</SelectItem>
                  </SelectContent>
                </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="avatarUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avatar URL</FormLabel>
                  <FormControl>
                  <Input
                      className="border ring-primary"
                      placeholder="Enter your avatar URL"
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-primary"
            >
              Request
            </Button>
          </form>
        </Form>
      </div>
    </section>
    )
}