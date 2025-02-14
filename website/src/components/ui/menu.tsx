import { Menu as ArkMenu } from '@ark-ui/react/menu'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { menu } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(menu)

const Menu = withProvider(ArkMenu.Root)
const MenuArrow = withContext(styled(ArkMenu.Arrow), 'arrow')
const MenuArrowTip = withContext(styled(ArkMenu.ArrowTip), 'arrowTip')
const MenuContent = withContext(styled(ArkMenu.Content), 'content')
const MenuContextTrigger = withContext(styled(ArkMenu.ContextTrigger), 'contextTrigger')
const MenuItem = withContext(styled(ArkMenu.Item), 'item')
const MenuItemGroup = withContext(styled(ArkMenu.ItemGroup), 'itemGroup')
const MenuItemGroupLabel = withContext(styled(ArkMenu.ItemGroupLabel), 'itemGroupLabel')
const MenuOptionItem = withContext(styled(ArkMenu.OptionItem), 'optionItem')
const MenuPositioner = withContext(styled(ArkMenu.Positioner), 'positioner')
const MenuSeparator = withContext(styled(ArkMenu.Separator), 'separator')
const MenuTrigger = withContext(styled(ArkMenu.Trigger), 'trigger')
const MenuTriggerItem = withContext(styled(ArkMenu.TriggerItem), 'triggerItem')

const Root = Menu
const Arrow = MenuArrow
const ArrowTip = MenuArrowTip
const Content = MenuContent
const ContextTrigger = MenuContextTrigger
const Item = MenuItem
const ItemGroup = MenuItemGroup
const ItemGroupLabel = MenuItemGroupLabel
const OptionItem = MenuOptionItem
const Positioner = MenuPositioner
const Separator = MenuSeparator
const Trigger = MenuTrigger
const TriggerItem = MenuTriggerItem

export {
  Arrow,
  ArrowTip,
  Content,
  ContextTrigger,
  Item,
  ItemGroup,
  ItemGroupLabel,
  Menu,
  MenuArrow,
  MenuArrowTip,
  MenuContent,
  MenuContextTrigger,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuOptionItem,
  MenuPositioner,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
  OptionItem,
  Positioner,
  Root,
  Separator,
  Trigger,
  TriggerItem,
}

export interface MenuProps extends ComponentProps<typeof Menu> {}
export interface MenuArrowProps extends ComponentProps<typeof MenuArrow> {}
export interface MenuArrowTipProps extends ComponentProps<typeof MenuArrowTip> {}
export interface MenuContentProps extends ComponentProps<typeof MenuContent> {}
export interface MenuContextTriggerProps extends ComponentProps<typeof MenuContextTrigger> {}
export interface MenuItemProps extends ComponentProps<typeof MenuItem> {}
export interface MenuItemGroupProps extends ComponentProps<typeof MenuItemGroup> {}
export interface MenuItemGroupLabelProps extends ComponentProps<typeof MenuItemGroupLabel> {}
export interface MenuOptionItemProps extends ComponentProps<typeof MenuOptionItem> {}
export interface MenuPositionerProps extends ComponentProps<typeof MenuPositioner> {}
export interface MenuSeparatorProps extends ComponentProps<typeof MenuSeparator> {}
export interface MenuTriggerProps extends ComponentProps<typeof MenuTrigger> {}
export interface MenuTriggerItemProps extends ComponentProps<typeof MenuTriggerItem> {}
