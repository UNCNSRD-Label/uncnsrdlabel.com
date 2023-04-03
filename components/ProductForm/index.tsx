'use client'

import type {
  Product,
  ProductVariant,
} from '@shopify/hydrogen-react/storefront-api-types'
import type { ChangeEventHandler, FC, ReactNode } from 'react'
import type { PartialDeep } from 'type-fest'

import {
  useProduct,
  AddToCartButton,
  ShopPayButton,
} from '@shopify/hydrogen-react'
import { clsx } from 'clsx'
import { useCallback } from 'react'
// import { RiHeartAddLine } from "react-icons/ri";
// import { SlBag } from "react-icons/sl";
import { useQueryParam, StringParam, withDefault } from 'use-query-params'

import { getColorHexCodeByName } from '#/lib/util/GraphQL'

import styles from './index.module.css'

type Props = {
  children?: ReactNode
  className?: string
  path: string
  product: PartialDeep<Product, { recurseIntoArrays: true }>
}

export const Component: FC<Props> = ({ children, className, path }) => {
  const { options, setSelectedOption, selectedVariant, variants } = useProduct()

  const isOutOfStock = !selectedVariant?.availableForSale || false

  const handleOptionChange = useCallback<
    ChangeEventHandler<HTMLSelectElement | HTMLInputElement>
  >(
    (event) => {
      setSelectedOption(event.target.name, event.target.value)
    },
    [setSelectedOption]
  )

  return (
    <>
      {options?.some((option) => (option?.values?.length || 0) > 1) && (
        <section
          className={clsx(
            styles.section,
            styles.sectionOptions,
            'not-prose',
            'dropdown',
            'dropdown-top',
            'dropdown-hover'
          )}
        >
          {options?.map((option, optionIndex) => {
            if (option?.values?.length === 1) {
              return null
            }

            if (option?.name && ['Color', 'Size'].includes(option?.name)) {
              return (
                <div
                  key={`${option?.name}-${optionIndex}`}
                  className={clsx(styles.inputGroupContainer)}
                >
                  <span className={clsx(styles.title, 'text-base')}>
                    {option?.name}
                  </span>
                  <div
                    className={clsx(
                      'form-control-group',
                      `form-control-group--${option?.name}`,
                      styles.inputGroup,
                      option?.name === 'Color' && styles.inputGroupGrid
                    )}
                  >
                    {option?.values?.map((value, valueIndex) => (
                      <div
                        className={clsx('form-control')}
                        key={`${option.name}-${optionIndex}-${valueIndex}`}
                      >
                        <label
                          className={clsx(
                            'cursor-pointer',
                            'label',
                            styles.label,
                            option?.name === 'Size' && 'pl-0'
                          )}
                        >
                          <span
                            className={clsx('label-text', styles.labelText)}
                          >
                            {value}
                          </span>
                          <span
                            className={clsx(
                              'radioContainer',
                              styles.radioContainer
                            )}
                          >
                            <input
                              className={clsx(
                                'radio',
                                option?.name === 'Color' && 'radio-lg',
                                option?.name === 'Size' && 'hidden',
                                value &&
                                  variants &&
                                  `checked:bg-[${getColorHexCodeByName(
                                    value,
                                    variants
                                  )}]`
                              )}
                              name={option?.name}
                              onChange={handleOptionChange}
                              type="radio"
                              style={{
                                ...(option?.name === 'Color' &&
                                  value &&
                                  variants && {
                                    backgroundColor: getColorHexCodeByName(
                                      value,
                                      variants
                                    ),
                                  }),
                              }}
                              value={value}
                            />
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }

            return (
              <label
                key={`${option?.name}-${optionIndex}`}
                className={clsx(styles.label)}
              >
                <span className={clsx(styles.text, 'text-base')}>
                  {option?.name}
                </span>
                <select
                  className="select select-ghost w-full mt-1"
                  name={option?.name}
                  onChange={handleOptionChange}
                >
                  <option disabled>Select {option?.name}</option>
                  {option?.values?.map((value, valueIndex) => (
                    <option key={`${option.name}-${optionIndex}-${valueIndex}`}>
                      {value}
                    </option>
                  ))}
                </select>
              </label>
            )
          })}
        </section>
      )}
      <section className={clsx(styles.section, styles.sectionActions)}>
        <AddToCartButton
          accessibleAddingToCartLabel="Adding item to your cart"
          className={clsx(
            'btn',
            `btn-${isOutOfStock ? 'disabled' : 'primary'}`,
            'gap-2'
          )}
          disabled={isOutOfStock}
          quantity={1}
          type="button"
          variantId={selectedVariant?.id}
        >
          {/* <SlBag
              aria-hidden="true"
              className={clsx("icon")}
              title="View my shopping bag"
            /> */}
          <span>{isOutOfStock ? 'Sold out' : 'Add to bag'}</span>
        </AddToCartButton>
        <button className={clsx('btn', 'btn-outline', 'gap-2')}>
          {/* <RiHeartAddLine
            aria-hidden="true"
            className={clsx("icon")}
            title="Add to wishlist"
          /> */}
          <span>Add to wishlist</span>
        </button>
        {!isOutOfStock && (
          <div className={clsx(styles.divider, 'divider')}>OR</div>
        )}
        {!isOutOfStock && (
          <ShopPayButton
            className="flex items-center col-span-full"
            variantIds={[selectedVariant.id!]}
          />
        )}
      </section>
    </>
  )
}

export default Component
