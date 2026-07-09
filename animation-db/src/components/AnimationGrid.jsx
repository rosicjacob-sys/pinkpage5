import AnimationCard from './AnimationCard'

export default function AnimationGrid({ animations, getStatus, onApprove, onDecline, onUnrate }) {
  return (
    <div className="animation-grid">
      {animations.map((anim) => (
        <AnimationCard
          key={anim.id}
          animation={anim}
          status={getStatus(anim.id)}
          onApprove={() => onApprove(anim.id)}
          onDecline={() => onDecline(anim.id)}
          onUnrate={() => onUnrate(anim.id)}
        />
      ))}
    </div>
  )
}
