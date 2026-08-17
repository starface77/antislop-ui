import React from 'react';
import { Check } from 'lucide-react';

export interface StepItem {
  id: string;
  title: string;
  description?: string;
}

export interface StepperProps {
  steps: StepItem[];
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: 6, userSelect: 'none' }}>
      {steps.map((step, idx) => {
        const isDone = idx < currentStep;
        const isCurrent = idx === currentStep;
        const isLast = idx === steps.length - 1;

        return (
          <React.Fragment key={step.id}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  backgroundColor: isDone || isCurrent ? 'var(--p-t-900)' : 'var(--p-soft)',
                  color: isDone || isCurrent ? 'var(--p-app)' : 'var(--p-t-500)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 10.5,
                  fontWeight: 600,
                }}
              >
                {isDone ? <Check size={11} /> : idx + 1}
              </div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: isCurrent ? 550 : 450,
                  color: isCurrent ? 'var(--p-t-900)' : 'var(--p-t-500)',
                  whiteSpace: 'nowrap',
                }}
              >
                {step.title}
              </span>
            </div>

            {!isLast && (
              <div
                style={{
                  flex: 1,
                  height: 2,
                  backgroundColor: isDone ? 'var(--p-t-900)' : 'var(--p-soft)',
                  borderRadius: 99,
                  minWidth: 16,
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
