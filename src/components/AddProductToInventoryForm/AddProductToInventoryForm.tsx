import Box from '../shared/Box'
import ProductSelectField from '../ProductSelectField/ProductSelectField.tsx'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { InventoryItem } from '../../types'
import { addProductToInventorySchema } from './validationSchema.ts'
import Button from '../shared/Button'

type AddProductToInventoryProps = {
  addItem: (item: InventoryItem) => void
}
const AddProductToInventoryForm = ({ addItem }: AddProductToInventoryProps) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InventoryItem>({
    defaultValues: {
      quantity: 1,
    },
    resolver: zodResolver(addProductToInventorySchema),
    mode: 'all',
  })
  const onSubmit: SubmitHandler<InventoryItem> = (data) => {
    addItem(data)
    reset()
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Controller
          control={control}
          name={'name'}
          render={({ field }) => (
            <ProductSelectField
              onChange={(value) => {
                field.onChange((value as { value: string }).value)
              }}
              value={{ value: field.value, label: field.value }}
            />
          )}
        />

        {errors.name && (
          <span className="form__error">{errors.name.message}</span>
        )}
        <input
          className="input"
          {...register('quantity', {
            valueAsNumber: true,
          })}
          placeholder="Quantity"
          type="number"
          min="1"
        />
        {errors.quantity && (
          <span className="form__error">{errors.quantity.message}</span>
        )}
        <Button type="submit">+</Button>
      </form>
    </Box>
  )
}

export default AddProductToInventoryForm
