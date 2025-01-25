'use client'

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { inserToCartSchema } from '@/schema/product';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import { addToCart } from '@/requests/cart';
import { toast } from 'sonner';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { productDetailsSchema } from '@/schema/product';

type ProductDetails = z.infer<typeof productDetailsSchema>

export const AddToCartHandler = ({ product } : { product: ProductDetails }) => {

    const router = useRouter();

    const form = useForm<z.infer<typeof inserToCartSchema>>({
        resolver: zodResolver(inserToCartSchema),
        defaultValues: {
          quantity: 1,
        },
      });
    
      async function onSubmit(values: z.infer<typeof inserToCartSchema>) {
        const token = Cookies.get("accessToken");
    
        if (!token) {
            toast('Failed add item, trust tring to relogin..', {
                description: new Date().toISOString().split('T')[0],
                action: { label: 'Close', onClick: () => '' },
            });
            return router.push("/")
        }
    
        toast('Add item to cart succesfully', {
          description: new Date().toISOString().split('T')[0],
          action: { label: 'Close', onClick: () => '' },
        });
    
        await addToCart(product.id, token, values.quantity)
    
    
        router.push("/cart")
      }

    return (
        <Form {...form}>
            <form
              className="flex gap-3 mt-4 sm:mt-0"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <Input
                        type="number"
                        name="quantity"
                        min={1}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        value={field.value}
                        className="w-20"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                className="w-full"
                type="submit"
              >
                Add to cart
              </Button>
            </form>
          </Form>
    )
}