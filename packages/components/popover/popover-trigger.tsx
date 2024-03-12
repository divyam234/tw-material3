import React, { Children, cloneElement, useMemo } from 'react'
import { useButton as useAriaButton } from '@react-aria/button'
import { mergeProps } from '@react-aria/utils'

import { usePopoverContext } from './popover-context'
import { forwardRef } from '@nextui-org/system'
import { Button } from '../button'
import { pickChildren } from '@nextui-org/react-utils'

export interface PopoverTriggerProps {
  children?: React.ReactNode
}

const PopoverTrigger = forwardRef<'button', PopoverTriggerProps>((props, _) => {
  const { triggerRef, getTriggerProps } = usePopoverContext()

  const { children, ...otherProps } = props

  // force a single child
  const child = useMemo<any>(() => {
    if (typeof children === 'string') return <p>{children}</p>

    return Children.only(children) as React.ReactElement & {
      ref?: React.Ref<any>
    }
  }, [children])

  const { onPress, ...rest } = useMemo(() => {
    return getTriggerProps(mergeProps(child.props, otherProps), child.ref)
  }, [getTriggerProps, child.props, otherProps, child.ref])

  const [, triggerChildren] = pickChildren(children, Button)

  const { buttonProps } = useAriaButton({ onPress }, triggerRef)

  const hasButton = useMemo<boolean>(() => {
    return triggerChildren?.[0] !== undefined
  }, [triggerChildren])

  return cloneElement(
    child,
    mergeProps(rest, hasButton ? { onPress } : buttonProps),
  )
})

PopoverTrigger.displayName = 'PopoverTrigger'

export default PopoverTrigger