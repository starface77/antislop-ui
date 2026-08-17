import React, { useState } from 'react';
import {
  Zap,
  Globe,
  ShieldCheck,
  Cpu,
  Layers,
  TrendingUp,
  CreditCard,
  Users,
  Sparkles,
  Command,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

import {
  Button,
  CopyButton,
  Input,
  PasswordInput,
  PasswordStrength,
  PinInput,
  Select,
  RangeSlider,
  StatCard,
  Sparkline,
  ActivityHeatmap,
  FeatureCard,
  TestimonialCard,
  PricingTier,
  SegmentedControl,
  Accordion,
  Badge,
  AvatarGroup,
  StatusDot,
  Table,
  ThemeToggle,
  Divider,
} from './components/pure';

import type { Column, SelectOption } from './components/pure';

interface LandingPageProps {
  theme: 'light' | 'dark' | 'midnight';
  setTheme: (theme: 'light' | 'dark' | 'midnight') => void;
  onOpenStudio: () => void;
}

interface MemberRow {
  id: string;
  name: string;
  role: string;
  status: 'active' | 'offline';
  spend: string;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  theme,
  setTheme,
  onOpenStudio,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [sliderMin, setSliderMin] = useState(25);
  const [sliderMax, setSliderMax] = useState(75);
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [pinVal, setPinVal] = useState('5921');

  const selectOptions: SelectOption[] = [
    { value: 'starter', label: 'Starter ($0/mo)' },
    { value: 'pro', label: 'Enterprise Pro ($49/mo)' },
    { value: 'custom', label: 'Dedicated Cluster' },
  ];

  const members: MemberRow[] = [
    { id: '1', name: 'Sophia Sterling', role: 'Head of Product', status: 'active', spend: '$12,400' },
    { id: '2', name: 'Marcus Vance', role: 'Solutions Architect', status: 'active', spend: '$8,950' },
    { id: '3', name: 'Elena Rostova', role: 'Design Systems Lead', status: 'offline', spend: '$4,200' },
  ];

  const columns: Column<MemberRow>[] = [
    {
      key: 'name',
      header: 'Member',
      width: '40%',
      render: (u) => (
        <span style={{ fontWeight: 500, color: 'var(--p-t-900)' }}>{u.name}</span>
      ),
    },
    {
      key: 'role',
      header: 'Role',
      width: '30%',
      render: (u) => <span style={{ color: 'var(--p-t-600)' }}>{u.role}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      width: '15%',
      render: (u) => (
        <Badge variant={u.status === 'active' ? 'success' : 'neutral'} dot size="sm">
          {u.status === 'active' ? 'Active' : 'Offline'}
        </Badge>
      ),
    },
    {
      key: 'spend',
      header: 'Spend',
      width: '15%',
      align: 'right',
      render: (u) => (
        <span style={{ fontFamily: 'var(--p-font-mono)', fontSize: 11.5, fontWeight: 500, color: 'var(--p-t-900)' }}>
          {u.spend}
        </span>
      ),
    },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--p-app)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      {/* ── DYNAMIC ISLAND FLOATING PILL NAVBAR ─────────────────── */}
      <div
        style={{
          position: 'fixed',
          top: 18,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '6px 10px 6px 18px',
          borderRadius: 99,
          backgroundColor: 'var(--p-surface)',
          backdropFilter: 'blur(20px)',
          userSelect: 'none',
          animation: 'pPopIn 0.25s var(--p-ease-spring)',
          width: 'calc(100% - 48px)',
          maxWidth: 760,
          boxShadow: 'none',
          border: 'none',
        }}
      >
        {/* Brand logo & name */}
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', flexShrink: 0 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--p-t-900)', letterSpacing: '-0.02em' }}>
            AntiSlop UI
          </span>
        </div>

        {/* Center Pill Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'nowrap' }}>
          {[
            { label: 'Features', href: '#features' },
            { label: 'Playground', href: '#demo' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Reviews', href: '#pricing' },
            { label: 'FAQ', href: '#faq' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: 12,
                fontWeight: 450,
                color: 'var(--p-t-600)',
                textDecoration: 'none',
                padding: '5px 10px',
                borderRadius: 99,
                transition: 'background-color 0.12s var(--p-ease-out), color 0.12s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--p-soft)';
                e.currentTarget.style.color = 'var(--p-t-900)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--p-t-600)';
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Action Switcher & Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <ThemeToggle theme={theme} onChange={setTheme} />

          <Button
            variant="primary"
            size="sm"
            style={{ borderRadius: 99, padding: '0 14px', height: 28, fontSize: 12, fontWeight: 550 }}
            onClick={onOpenStudio}
          >
            Studio (100+)
          </Button>
        </div>
      </div>

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section
        style={{
          padding: '110px 20px 64px',
          textAlign: 'center',
          maxWidth: 960,
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Dynamic Glowing Pill Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            padding: '4px 12px',
            borderRadius: 99,
            backgroundColor: 'var(--p-surface)',
            color: 'var(--p-t-700)',
            fontSize: 11.5,
            fontWeight: 500,
            marginBottom: 20,
            cursor: 'pointer',
            transition: 'transform 0.12s var(--p-ease-bounce)',
          }}
          onClick={onOpenStudio}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <Sparkles size={12} color="var(--p-t-900)" />
          <span>AntiSlop UI 2.0 • 100+ Universal Primitives Released</span>
          <ChevronRight size={12} color="var(--p-t-400)" />
        </div>

        <h1
          style={{
            fontSize: 52,
            fontWeight: 600,
            letterSpacing: '-0.045em',
            lineHeight: 1.1,
            color: 'var(--p-t-900)',
            maxWidth: 820,
            margin: '0 auto 18px',
          }}
        >
          Zero Border. Zero Shadow. Pure Tactile Surface.
        </h1>

        <p
          style={{
            fontSize: 16.5,
            color: 'var(--p-t-500)',
            lineHeight: 1.6,
            maxWidth: 620,
            margin: '0 auto 32px',
            fontWeight: 400,
          }}
        >
          The fastest, most elegant design system engineered for high-growth SaaS platforms, FinTech dashboards, and modern engineering tools.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
          <Button variant="primary" size="lg" icon={<Zap size={14} />} onClick={onOpenStudio}>
            Explore 100+ Components
          </Button>
          <Button variant="secondary" size="lg" icon={<ExternalLink size={14} />} onClick={() => window.open('https://github.com', '_blank')}>
            View on GitHub
          </Button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CopyButton value="npm i @antislop/ui" label="npm i @antislop/ui" size="md" />
        </div>
      </section>

      {/* ── TECH & ECOSYSTEM BADGES ─────────────────────────────── */}
      <section style={{ maxWidth: 760, margin: '0 auto 56px', width: '100%', padding: '0 20px', textAlign: 'center' }}>
        <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--p-t-400)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Seamless Framework Compatibility
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginTop: 12 }}>
          {['React 19', 'Next.js 15', 'Vite 6', 'TypeScript 5.8', 'Remix', 'Zero CSS Runtime'].map((tag, i) => (
            <span
              key={i}
              style={{
                fontSize: 11.5,
                fontWeight: 500,
                color: 'var(--p-t-600)',
                backgroundColor: 'var(--p-surface)',
                padding: '4px 10px',
                borderRadius: 99,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ── LIVE INTERACTIVE HERO PREVIEW STAGE ──────────────────── */}
      <section style={{ maxWidth: 960, margin: '0 auto 80px', width: '100%', padding: '0 20px' }}>
        <div
          style={{
            backgroundColor: 'var(--p-surface)',
            borderRadius: 'var(--p-r-xl)',
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {/* Top Stage Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: 'var(--p-soft)' }} />
              <div style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: 'var(--p-soft)' }} />
              <div style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: 'var(--p-soft)' }} />
              <span style={{ fontSize: 12, color: 'var(--p-t-500)', marginLeft: 6, fontWeight: 500 }}>Live Edge Cluster Dashboard</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Badge variant="success" dot size="sm">42 Nodes Synchronized</Badge>
              <AvatarGroup users={[{ name: 'Sarah' }, { name: 'David' }, { name: 'Elena' }]} max={3} size="sm" />
            </div>
          </div>

          {/* 4 Stat Cards in 2x2 Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 8 }}>
            <StatCard
              title="Monthly ARR"
              value="$48,250"
              change="+14.2%"
              trend="up"
              description="vs $42.1k last month"
              icon={<TrendingUp size={13} />}
            />
            <StatCard
              title="Active Subscribers"
              value="1,420"
              change="+8.1%"
              trend="up"
              description="Net +112 this week"
              icon={<Users size={13} />}
            />
            <StatCard
              title="Cluster Uptime"
              value="99.98%"
              change="+0.02%"
              trend="up"
              description="Zero packet loss"
              icon={<Zap size={13} />}
            />
            <StatCard
              title="Gross Margin"
              value="84.5%"
              change="+2.4%"
              trend="up"
              description="Target 85% reached"
              icon={<CreditCard size={13} />}
            />
          </div>

          {/* Sparkline & Heatmap Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div style={{ padding: '12px 14px', backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-lg)', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 11.5, color: 'var(--p-t-500)' }}>Network Throughput Telemetry</span>
              <span style={{ fontSize: 18, fontWeight: 600, color: 'var(--p-t-900)' }}>4.8 GB/s</span>
              <Sparkline data={[14, 22, 18, 36, 42, 38, 56, 64, 58, 80]} color="var(--p-success)" width={380} height={36} />
            </div>

            <div style={{ padding: '12px 14px', backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-lg)' }}>
              <ActivityHeatmap label="Deployment Velocity (28 Days)" />
            </div>
          </div>

          {/* Table Preview */}
          <Table columns={columns} data={members} />
        </div>
      </section>

      {/* ── BENTO ARCHITECTURE GRID ─────────────────────────────── */}
      <section id="features" style={{ maxWidth: 960, margin: '0 auto 80px', width: '100%', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2 style={{ fontSize: 32, fontWeight: 600, color: 'var(--p-t-900)', letterSpacing: '-0.03em' }}>
            Built Differently. Zero Compromise.
          </h2>
          <p style={{ fontSize: 14.5, color: 'var(--p-t-500)', marginTop: 4 }}>
            AntiSlop UI replaces obsolete design tropes with calibrated tactile luminance.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
          <FeatureCard
            icon={<Layers size={16} />}
            title="Zero-Border Invariant"
            description="Eliminates visual clutter by replacing harsh 1px borders with layered luminance contrast."
            actionText="Learn more"
            onAction={onOpenStudio}
          />
          <FeatureCard
            icon={<Zap size={16} />}
            title="macOS Spring Physics"
            description="Tactile cubic-bezier spring curves deliver instant physical tactile feedback on every click."
            actionText="Test physics"
            onAction={onOpenStudio}
          />
          <FeatureCard
            icon={<Globe size={16} />}
            title="FinTech & Charts"
            description="Sparklines, virtual credit cards, contribution heatmaps, and dense KPI grids out of the box."
            actionText="View FinTech"
            onAction={onOpenStudio}
          />
          <FeatureCard
            icon={<ShieldCheck size={16} />}
            title="Enterprise Security"
            description="Password strength meters, 2FA OTP pin inputs, and social OAuth triggers ready to go."
            actionText="Check Auth"
            onAction={onOpenStudio}
          />
          <FeatureCard
            icon={<Cpu size={16} />}
            title="Zero Dependencies"
            description="Pure React and Vanilla CSS tokens with 0 external baggage. Blazing fast 500ms builds."
            actionText="View benchmarks"
            onAction={onOpenStudio}
          />
          <FeatureCard
            icon={<Command size={16} />}
            title="Keyboard-First A11y"
            description="Global ⌘K command palette, escape key handlers, and complete screen reader compliance."
            actionText="See a11y"
            onAction={onOpenStudio}
          />
        </div>
      </section>

      {/* ── INTERACTIVE PLAYGROUND DEMO ──────────────────────────── */}
      <section id="demo" style={{ maxWidth: 960, margin: '0 auto 80px', width: '100%', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h2 style={{ fontSize: 32, fontWeight: 600, color: 'var(--p-t-900)', letterSpacing: '-0.03em' }}>
            Interactive Component Playground
          </h2>
          <p style={{ fontSize: 14.5, color: 'var(--p-t-500)', marginTop: 4 }}>
            Try tactile inputs, OTP pin codes, range sliders, and virtual cards in real time.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {/* Left Form Column */}
          <div style={{ backgroundColor: 'var(--p-surface)', borderRadius: 'var(--p-r-xl)', padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--p-t-900)' }}>Authentication & Controls</span>
            
            <Input label="Workspace Email" value="alex.chen@pureui.dev" onChange={() => {}} />
            
            <PasswordInput label="Access Token Secret" value="SuperSecureToken123!" onChange={() => {}} />
            <PasswordStrength score={4} />

            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 16, alignItems: 'flex-start' }}>
              <PinInput label="2FA PIN Code" length={4} value={pinVal} onChange={setPinVal} />
              <div style={{ minWidth: 0 }}>
                <Select label="Plan" options={selectOptions} value={selectedPlan} onChange={setSelectedPlan} />
              </div>
            </div>

            <RangeSlider
              label="Bandwidth Allocation Range (%)"
              minVal={sliderMin}
              maxVal={sliderMax}
              onChange={(min, max) => { setSliderMin(min); setSliderMax(max); }}
            />
          </div>

          {/* Right Preview Column */}
          <div style={{ backgroundColor: 'var(--p-surface)', borderRadius: 'var(--p-r-xl)', padding: 20, display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--p-t-900)' }}>Live Cluster Telemetry</span>
                <Badge variant="success" dot size="sm">Operational</Badge>
              </div>

              <div style={{ padding: '12px 14px', backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-md)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: 11.5, color: 'var(--p-t-500)' }}>Throughput Telemetry</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--p-t-900)' }}>4.8 GB/s</span>
                </div>
                <Sparkline data={[14, 22, 18, 36, 42, 38, 56, 64, 58, 80]} color="var(--p-success)" width={360} height={32} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontSize: 11.5, fontWeight: 500, color: 'var(--p-t-600)' }}>Active Production API Key</span>
                <CopyButton value="antislop_live_8912409712a" label="antislop_live_8912409712a" size="md" />
              </div>
            </div>

            <ActivityHeatmap label="Cluster Velocity (28 Days)" />
          </div>
        </div>
      </section>

      {/* ── PRICING SECTION ──────────────────────────────────────── */}
      <section id="pricing" style={{ maxWidth: 960, margin: '0 auto 80px', width: '100%', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h2 style={{ fontSize: 32, fontWeight: 600, color: 'var(--p-t-900)', letterSpacing: '-0.03em' }}>
            Simple, Transparent Pricing
          </h2>
          <p style={{ fontSize: 14.5, color: 'var(--p-t-500)', marginTop: 4, marginBottom: 18 }}>
            Free open-source core with enterprise cloud infrastructure options.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SegmentedControl
              options={[
                { value: 'monthly', label: 'Monthly Billing' },
                { value: 'annual', label: 'Annual Billing (Save 20%)' },
              ]}
              value={billingCycle}
              onChange={(v) => setBillingCycle(v as any)}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
          <PricingTier
            name="Community Core"
            price="$0"
            period="/forever"
            description="For open-source builders and side projects."
            features={[
              '100+ Universal React Components',
              'Zero-Border Design Tokens',
              'Full TypeScript Support',
              'Community Support on GitHub',
            ]}
            ctaText="Install Free"
            onSelect={onOpenStudio}
          />
          <PricingTier
            name="Enterprise Pro"
            price={billingCycle === 'monthly' ? '$49' : '$39'}
            period="/user/month"
            description="For high-growth teams building mission-critical apps."
            popular
            features={[
              'All 100+ Primitives & Blocks',
              '42 Global Edge Cluster Sync',
              'Advanced FinTech & Chart Widgets',
              'Dedicated Solutions Architect',
            ]}
            ctaText="Upgrade to Pro"
            onSelect={onOpenStudio}
          />
          <PricingTier
            name="Dedicated Scale"
            price="Custom"
            period=""
            description="Custom infrastructure, custom SLA, and VPC deployment."
            features={[
              'Dedicated Single-Tenant Cluster',
              'Custom Theme Token Integration',
              '99.999% SLA Uptime Guarantee',
              '24/7 Priority Emergency Hotline',
            ]}
            ctaText="Contact Sales"
            onSelect={onOpenStudio}
          />
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section style={{ maxWidth: 960, margin: '0 auto 80px', width: '100%', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h2 style={{ fontSize: 32, fontWeight: 600, color: 'var(--p-t-900)', letterSpacing: '-0.03em' }}>
            Loved by Product Engineers Worldwide
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
          <TestimonialCard
            quote="AntiSlop UI eliminates visual clutter completely. The tactile spring response and zero-border design feel like native macOS software."
            author="Sophia Sterling"
            role="Head of Product"
            company="Linear Dynamics"
          />
          <TestimonialCard
            quote="The FinTech widgets saved our team over 3 months of UI development. Our dashboard latency dropped to near-zero."
            author="Marcus Vance"
            role="Solutions Architect"
            company="Stripe Scale"
          />
          <TestimonialCard
            quote="Finally a React library that respects surface luminance and typography hierarchy instead of slapping random borders everywhere."
            author="Elena Rostova"
            role="Design Systems Lead"
            company="Acme Cloud"
          />
        </div>
      </section>

      {/* ── FAQ SECTION ─────────────────────────────────────────── */}
      <section id="faq" style={{ maxWidth: 760, margin: '0 auto 80px', width: '100%', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h2 style={{ fontSize: 32, fontWeight: 600, color: 'var(--p-t-900)', letterSpacing: '-0.03em' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Accordion title="Why does AntiSlop UI avoid box-shadows and borders?" subtitle="Design Philosophy">
            Traditional web frameworks rely on heavy box-shadows and 1px borders which create visual clutter and high cognitive load. AntiSlop UI achieves clear depth and hierarchy using calibrated multi-layer luminance contrast (App, Surface, Soft, Sunken).
          </Accordion>
          <Accordion title="Can I use AntiSlop UI with Next.js, Vite, and Remix?" subtitle="Framework Compatibility">
            Yes! AntiSlop UI components are 100% standard React 18/19 components built with vanilla CSS variables. There are zero framework-specific lock-ins.
          </Accordion>
          <Accordion title="Is AntiSlop UI free and open source?" subtitle="MIT License">
            Yes, AntiSlop UI is completely open source under the MIT License. You can use it in personal and commercial SaaS projects without any restrictions.
          </Accordion>
          <Accordion title="How do I install AntiSlop UI in my project?" subtitle="Installation">
            Simply install via npm with `npm i @antislop/ui` or copy individual component files directly into your project repository.
          </Accordion>
        </div>
      </section>

      {/* ── CURVED FUTURISTIC FOOTER ("скрученный футер") ─────────── */}
      <footer style={{ maxWidth: 960, margin: '0 auto 32px', width: '100%', padding: '0 20px', userSelect: 'none' }}>
        <div
          style={{
            backgroundColor: 'var(--p-surface)',
            borderRadius: 28,
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
          }}
        >
          {/* Top Row: Brand & Status */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--p-t-900)', letterSpacing: '-0.02em' }}>
                AntiSlop UI
              </span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '4px 10px',
                borderRadius: 99,
                backgroundColor: 'var(--p-soft)',
                fontSize: 11,
                fontWeight: 500,
                color: 'var(--p-t-600)',
              }}
            >
              <StatusDot status="running" size={5} />
              <span>All 42 Regional Edge Clusters Operational</span>
            </div>
          </div>

          {/* Links Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 20, fontSize: 12 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontWeight: 600, color: 'var(--p-t-900)' }}>Primitives</span>
              <a href="#features" style={{ color: 'var(--p-t-500)', textDecoration: 'none' }}>Form Inputs</a>
              <a href="#features" style={{ color: 'var(--p-t-500)', textDecoration: 'none' }}>FinTech Cards</a>
              <a href="#features" style={{ color: 'var(--p-t-500)', textDecoration: 'none' }}>Sparklines & Charts</a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontWeight: 600, color: 'var(--p-t-900)' }}>Resources</span>
              <span style={{ color: 'var(--p-t-500)', cursor: 'pointer' }} onClick={onOpenStudio}>Component Studio</span>
              <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--p-t-500)', textDecoration: 'none' }}>GitHub Repository</a>
              <span style={{ color: 'var(--p-t-500)' }}>MIT License</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontWeight: 600, color: 'var(--p-t-900)' }}>Community</span>
              <span style={{ color: 'var(--p-t-500)' }}>Discord Server</span>
              <span style={{ color: 'var(--p-t-500)' }}>X (Twitter) @antislop_ui</span>
              <span style={{ color: 'var(--p-t-500)' }}>Releases & Changelog</span>
            </div>
          </div>

          <Divider />

          {/* Bottom Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 11.5, color: 'var(--p-t-400)', flexWrap: 'wrap', gap: 8 }}>
            <span>© 2026 AntiSlop UI Foundation. Crafted with Zero Border & Zero Shadow architecture.</span>
            <div style={{ display: 'flex', gap: 12 }}>
              <span style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top ↑</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
