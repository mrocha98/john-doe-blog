/*
At 2021-01-26, gatsby-plugin-transition-link doesn't have support for TypeScript.
There is a PR open where an index.d.ts is created, but isn't merged yet:
https://github.com/TylerBarnes/gatsby-plugin-transition-link/pull/202

This is file is just copy/paste of the PR changes with some modifications.
Delete this file and update the lib when the PR have been merged.
*/

declare module 'gatsby-plugin-transition-link/AniLink' {
  import { Component } from 'react'
  import { GatsbyLinkProps } from 'gatsby'

  interface AniLinkFade {
    fade: boolean
  }

  type AniLinkPaintDripColors =
    | {
        color?: string
      }
    | {
        hex?: string
      }

  type AniLinkPaintDrip = AniLinkPaintDripColors & {
    paintDrip: boolean
  }

  interface AniLinkSwipe {
    swipe: boolean
  }

  interface AniLinkCover {
    cover: boolean
    bg?: string
  }

  type AniLinkTypes =
    | AniLinkFade
    | AniLinkPaintDrip
    | AniLinkSwipe
    | AniLinkCover

  interface AniLinkProps {
    to: string
    direction?: string
    duration?: number
    top?: 'exit' | 'entry'
    entryOffset?: number
    title?: string
    target?: string
    className?: string
    activeClassName?: string
  }

  class AniLink extends Component<AniLinkProps & AniLinkTypes> {}
  export default AniLink
}

declare module 'gatsby-plugin-transition-link' {
  import { GatsbyLinkProps as GatsbyLinkPropsGeneric } from 'gatsby'
  import { NavigateOptions } from '@reach/router'
  import { Component, RefObject, ReactNode } from 'react'

  type GatsbyLinkProps = GatsbyLinkPropsGeneric<any>

  interface TransitionHandlerProps {
    injectPageProps?: boolean
  }

  class TransitionHandler extends Component<TransitionHandlerProps> {}

  export type TransitionStatuses = 'entering' | 'entered' | 'exiting' | 'exited'

  interface TransitionStateProps {
    children: ({
      mount,
      transitionStatus
    }: {
      mount: boolean
      transitionStatus: TransitionStatuses
    }) => ReactNode
  }

  class TransitionState extends Component<TransitionStateProps> {}

  type TransitionPortalLevels = 'top' | 'bottom' | 'middle'

  interface TransitionPortalProps {
    level?: TransitionPortalLevels
  }

  class TransitionPortal extends Component<TransitionPortalProps> {}

  interface InternalContext<State = any> {
    inTransition: boolean
    disableAnimation: boolean
    e: false | Event
    exitDelay: number
    exitLength: number
    exitState: State
    exitTrigger: false | ExitEntryTriggerFn<State>
    exitProps: any
    entryDelay: number
    entryLength: number
    entryState: State
    entryProps: any
    entryTrigger: false | ExitEntryTriggerFn<State>
    updateContext: (obj: Partial<InternalContext<State>>) => void
  }

  interface TransitionObserverProps {
    forceRender?: boolean
    children: (
      contextState: InternalContext,
      innerRef: RefObject<unknown>
    ) => ReactNode
  }

  class TransitionObserver extends Component<TransitionObserverProps> {}

  interface TriggerFnProps<State> {
    node: HTMLElement
    e: Event
    entry: EntryExit<State>
    exit: EntryExit<State>
  }

  type ExitEntryTriggerFn<State = object> = ({
    exit,
    node
  }: TriggerFnProps<State>) => void

  interface EntryExit<State = object> {
    state?: State
    appearAfter?: number
    length?: number
    zIndex?: number
    delay?: number
    activeClass?: string
    className?: string
    trigger?: ExitEntryTriggerFn<State>
  }

  interface TriggerPages<State> {
    entry: Promise<EntryExit<State>>
    exit: Promise<EntryExit<State>>
  }

  interface UseTriggerTransitionOptions<State = any, LinkState = any> {
    event?: Event
    to?: string
    disableAnimation?: boolean
    replace?: NavigateOptions<LinkState>['replace']
    linkState?: NavigateOptions<LinkState>['state']
    exit?: EntryExit<State>
    entry?: EntryExit<State>
    inTransition?: boolean
    pages?: TriggerPages<State>
    trigger?: ExitEntryTriggerFn<State>
    preventScrollJump?: boolean
  }

  type programmaticallyTriggerTransition<State, LinkState> = (
    calledOptions?: Event | UseTriggerTransitionOptions<State, LinkState>
  ) => void
  const useTriggerTransition: <State, LinkState>(
    defaultOptions: UseTriggerTransitionOptions<State, LinkState>
  ) => programmaticallyTriggerTransition<State, LinkState>

  interface TransitionLinkProps<State = any>
    extends Omit<GatsbyLinkProps, 'onClick' | 'innerRef'> {
    exit: EntryExit<State>
    entry: EntryExit<State>
    state?: State
    replace?: NavigateOptions<any>['replace']
    preventScrollJump?: boolean
    trigger?: (pages: TriggerPages<State>) => void
    exitLength?: number
    entryDelay?: number
    exitFn?: Function
    entryState?: object
    to: GatsbyLinkProps['to']
    className?: GatsbyLinkProps['className']
    activeStyle?: GatsbyLinkProps['activeStyle']
    style?: GatsbyLinkProps['style']
    activeClassName?: GatsbyLinkProps['activeClassName']
    partiallyActive?: GatsbyLinkProps['partiallyActive']
    onClick?: (
      event: Parameters<Exclude<GatsbyLinkProps['onClick'], undefined>>[0],
      weShouldNavigate: boolean
    ) => void
    innerRef?: GatsbyLinkProps['ref']
    ref?: GatsbyLinkProps['ref']
  }

  class TransitionLink extends Component<TransitionLinkProps> {}

  export {
    TransitionHandler,
    TransitionState,
    TransitionPortal,
    TransitionObserver,
    useTriggerTransition
  }

  export default TransitionLink
}
