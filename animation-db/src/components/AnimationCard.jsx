import { Suspense, lazy } from 'react'

const previewComponents = {
  MaskedCharReveal: lazy(() => import('../previews/MaskedCharReveal')),
  MaskedLineReveal: lazy(() => import('../previews/MaskedLineReveal')),
  FadeUpStagger: lazy(() => import('../previews/FadeUpStagger')),
  MagneticHover: lazy(() => import('../previews/MagneticHover')),
  KineticMarquee: lazy(() => import('../previews/KineticMarquee')),
  GradientText: lazy(() => import('../previews/GradientText')),
  TextScramble: lazy(() => import('../previews/TextScramble')),
  SvgStrokeReveal: lazy(() => import('../previews/SvgStrokeReveal')),
  RadialGradientFollow: lazy(() => import('../previews/RadialGradientFollow')),
  StaggeredGrid: lazy(() => import('../previews/StaggeredGrid')),
  DataCounters: lazy(() => import('../previews/DataCounters')),
  TerminalType: lazy(() => import('../previews/TerminalType')),
  FlipTransition: lazy(() => import('../previews/FlipTransition')),
  CountUpPrice: lazy(() => import('../previews/CountUpPrice')),
  ShineSweep: lazy(() => import('../previews/ShineSweep')),
  ParallaxTilt: lazy(() => import('../previews/ParallaxTilt')),
  CartPop: lazy(() => import('../previews/CartPop')),
  ElasticHover: lazy(() => import('../previews/ElasticHover')),
  StickyNav: lazy(() => import('../previews/StickyNav')),
  ScrollProgress: lazy(() => import('../previews/ScrollProgress')),
  ImageReveal: lazy(() => import('../previews/ImageReveal')),
  GlitchText: lazy(() => import('../previews/GlitchText')),
  ScrollStateMachine: lazy(() => import('../previews/ScrollStateMachine')),
  SoftFloat: lazy(() => import('../previews/SoftFloat')),
  PulseBreathe: lazy(() => import('../previews/PulseBreathe')),
  BlurReveal: lazy(() => import('../previews/BlurReveal')),
  DashboardCounters: lazy(() => import('../previews/DashboardCounters')),
  ChartBars: lazy(() => import('../previews/ChartBars')),
  NumberFlip: lazy(() => import('../previews/NumberFlip')),
  Accordion: lazy(() => import('../previews/Accordion')),
  RippleButton: lazy(() => import('../previews/RippleButton')),
  StaggeredList: lazy(() => import('../previews/StaggeredList')),
  RotateOnScroll: lazy(() => import('../previews/RotateOnScroll')),
  UnderlineReveal: lazy(() => import('../previews/UnderlineReveal')),
  ParallaxLayers: lazy(() => import('../previews/ParallaxLayers')),
  BorderGlow: lazy(() => import('../previews/BorderGlow')),
}

function PreviewFallback() {
  return <div className="preview-loading">Loading preview...</div>
}

const DIFFICULTY_COLORS = {
  beginner: 'dif-beginner',
  intermediate: 'dif-intermediate',
  advanced: 'dif-advanced',
}

export default function AnimationCard({ animation, status, onApprove, onDecline, onUnrate }) {
  const PreviewComponent = previewComponents[animation.preview]

  return (
    <article className={`animation-card ${status ? `card-${status}` : ''}`}>
      <div className="card-preview">
        <Suspense fallback={<PreviewFallback />}>
          {PreviewComponent ? <PreviewComponent /> : <PreviewFallback />}
        </Suspense>
      </div>
      <div className="card-body">
        <div className="card-header">
          <span className="card-code">{animation.code}</span>
          <span className={`card-difficulty ${DIFFICULTY_COLORS[animation.difficulty] || ''}`}>
            {animation.difficulty}
          </span>
        </div>
        <h3 className="card-title">{animation.name}</h3>
        <p className="card-desc">{animation.description}</p>
        <div className="card-tags">
          <span className="tag tag-niche">{animation.niche}</span>
          {animation.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <div className="card-source">
          <span className="source-label">Source:</span> {animation.source}
        </div>
      </div>
      <div className="card-actions">
        <button
          className={`action-btn approve-btn ${status === 'approved' ? 'is-active' : ''}`}
          onClick={status === 'approved' ? onUnrate : onApprove}
          title={status === 'approved' ? 'Remove approval' : 'Approve'}
        >
          <span className="action-icon">✓</span>
          Approve
        </button>
        <button
          className={`action-btn decline-btn ${status === 'declined' ? 'is-active' : ''}`}
          onClick={status === 'declined' ? onUnrate : onDecline}
          title={status === 'declined' ? 'Remove decline' : 'Decline'}
        >
          <span className="action-icon">✗</span>
          Decline
        </button>
      </div>
      {status && (
        <div className={`card-status-badge badge-${status}`}>
          {status === 'approved' ? '✓ Approved' : '✗ Declined'}
        </div>
      )}
    </article>
  )
}
