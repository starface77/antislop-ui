import { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Zap,
  Search,
  Flame,
  Mail,
  Trash2,
  Share2,
  Download,
  Users,
  CreditCard,
  TrendingUp,
  Settings,
  Layers,
  Copy,
  Terminal,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ShieldCheck,
  Globe,
} from 'lucide-react';

import {
  Button,
  SplitButton,
  ButtonGroup,
  CopyButton,
  Input,
  PasswordInput,
  PasswordStrength,
  PinInput,
  NumberInput,
  SearchInput,
  Textarea,
  Select,
  MultiSelect,
  Switch,
  Checkbox,
  Slider,
  RangeSlider,
  DatePicker,
  ColorPicker,
  Dropzone,
  Rating,
  Card,
  Accordion,
  Divider,
  StatCard,
  Table,
  Badge,
  Chip,
  Avatar,
  AvatarGroup,
  PropertyRow,
  DescriptionList,
  Tree,
  StatusDot,
  Progress,
  CircularProgress,
  Skeleton,
  Spinner,
  Timeline,
  Tabs,
  Breadcrumb,
  Pagination,
  SegmentedControl,
  Stepper,
  ScrollToTop,
  Dialog,
  Drawer,
  ContextMenu,
  CommandPalette,
  Alert,
  Callout,
  Banner,
  Toast,
  ThemeToggle,
  Sparkline,
  ActivityHeatmap,
  FeatureCard,
  TestimonialCard,
  PricingTier,
  ToggleGroup,
} from './components/pure';

import type { ToastMessage, CommandItem, SelectOption, MultiSelectOption, Column, TreeNode, TimelineEvent } from './components/pure';

function GithubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const SELECT_OPTIONS: SelectOption[] = [
  { value: 'pro', label: 'Pro Enterprise ($49/mo)' },
  { value: 'business', label: 'Business Tier ($99/mo)' },
  { value: 'custom', label: 'Custom Dedicated Infrastructure' },
];

const MULTI_OPTIONS: MultiSelectOption[] = [
  { value: 'auth', label: 'OAuth 2.0' },
  { value: 'sso', label: 'SAML SSO' },
  { value: 'audit', label: 'Audit Logs' },
  { value: 'rbac', label: 'Granular RBAC' },
];

interface UserRow {
  id: string;
  name: string;
  role: string;
  status: 'active' | 'offline';
  spend: string;
}

import { LandingPage } from './LandingPage';

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'midnight'>('dark');
  const [viewMode, setViewMode] = useState<'studio' | 'landing'>('studio');
  const [cmdOpen, setCmdOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'forms' | 'fintech' | 'marketing' | 'dashboard' | 'data'>('all');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Interactive Modular States
  const [emailValue, setEmailValue] = useState('alex.chen@pureui.dev');
  const [passValue, setPassValue] = useState('SuperSecretPass99!');
  const [pinValue, setPinValue] = useState('4281');
  const [numberValue, setNumberValue] = useState(8);
  const [searchValue, setSearchValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('Zero-border surface hierarchy with spring micro-interactions.');
  const [selectValue, setSelectValue] = useState('pro');
  const [multiValue, setMultiValue] = useState<string[]>(['auth', 'rbac']);
  const [switchVal, setSwitchVal] = useState(true);
  const [checkboxVal, setCheckboxVal] = useState(true);
  const [sliderVal, setSliderVal] = useState(64);
  const [rangeMin, setRangeMin] = useState(20);
  const [rangeMax, setRangeMax] = useState(80);
  const [colorVal, setColorVal] = useState('#2563eb');
  const [dateVal, setDateVal] = useState(new Date());
  const [tabValue, setTabValue] = useState('analytics');
  const [page, setPage] = useState(1);
  const [rating, setRating] = useState(5);
  const [stepperStep, setStepperStep] = useState(1);
  const [segmentedVal, setSegmentedVal] = useState('monthly');
  const [toggleAlign, setToggleAlign] = useState('center');

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Global hotkey for Command Palette (⌘K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const addToast = (title: string, type: 'success' | 'info' | 'warning' | 'error' = 'success') => {
    const newToast: ToastMessage = {
      id: Math.random().toString(),
      title,
      type,
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const copyCode = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    addToast(`${label} copied to clipboard!`);
  };

  // Sample Table Data & Columns
  const sampleUsers: UserRow[] = [
    { id: '1', name: 'Sophia Sterling', role: 'Head of Product', status: 'active', spend: '$12,400' },
    { id: '2', name: 'Marcus Vance', role: 'Solutions Architect', status: 'active', spend: '$8,950' },
    { id: '3', name: 'Elena Rostova', role: 'Design Systems Lead', status: 'offline', spend: '$4,200' },
  ];

  const userColumns: Column<UserRow>[] = [
    {
      key: 'name',
      header: 'Member',
      width: '38%',
      render: (u) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, overflow: 'hidden' }}>
          <Avatar name={u.name} size="sm" />
          <span style={{ fontWeight: 500, color: 'var(--p-t-900)', overflow: 'hidden', textOverflow: 'ellipsis' }}>{u.name}</span>
        </div>
      ),
    },
    {
      key: 'role',
      header: 'Role',
      width: '28%',
      render: (u) => <span style={{ color: 'var(--p-t-600)', overflow: 'hidden', textOverflow: 'ellipsis' }}>{u.role}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      width: '18%',
      render: (u) => (
        <Badge variant={u.status === 'active' ? 'success' : 'neutral'} dot size="sm">
          {u.status === 'active' ? 'Active' : 'Offline'}
        </Badge>
      ),
    },
    {
      key: 'spend',
      header: 'Spend',
      width: '16%',
      align: 'right',
      render: (u) => (
        <span style={{ fontFamily: 'var(--p-font-mono)', fontSize: 11.5, fontWeight: 500, color: 'var(--p-t-900)' }}>
          {u.spend}
        </span>
      ),
    },
  ];

  // Sample Tree Data
  const sampleTree: TreeNode[] = [
    {
      id: '1',
      label: 'Design System Tokens',
      children: [
        { id: '1-1', label: 'Layered Luminance' },
        { id: '1-2', label: 'Inter Typography' },
        { id: '1-3', label: 'macOS Spring Curves' },
      ],
    },
    {
      id: '2',
      label: 'Universal Components (100+)',
      children: [
        { id: '2-1', label: 'Dashboard & Charts' },
        { id: '2-2', label: 'FinTech & Virtual Cards' },
        { id: '2-3', label: 'Landing & Marketing' },
      ],
    },
  ];

  // Sample Timeline Events
  const timelineEvents: TimelineEvent[] = [
    { id: '1', title: 'Global edge cluster rollout', description: 'Synchronized 42 points of presence worldwide.', time: '12m ago', active: true },
    { id: '2', title: 'Enterprise SSO verification', description: 'SAML 2.0 and Okta integration complete.', time: '2h ago' },
    { id: '3', title: 'Design system v2.0 published', description: 'Zero-border open source release.', time: '1d ago' },
  ];

  // Command Palette Items
  const commandItems: CommandItem[] = [
    { id: '1', title: 'Switch to Light Theme', icon: <Sun size={13} />, onSelect: () => setTheme('light') },
    { id: '2', title: 'Switch to Dark Theme', icon: <Moon size={13} />, onSelect: () => setTheme('dark') },
    { id: '3', title: 'Switch to Midnight Theme', icon: <Flame size={13} />, onSelect: () => setTheme('midnight') },
    { id: '4', title: 'Open Deployment Modal', icon: <Layers size={13} />, onSelect: () => setDialogOpen(true) },
    { id: '5', title: 'Open Settings Drawer', icon: <Settings size={13} />, onSelect: () => setDrawerOpen(true) },
    { id: '6', title: 'Copy CLI Install Command', icon: <Terminal size={13} />, onSelect: () => {
      navigator.clipboard.writeText('npm i @antislop/ui');
      addToast('Install command copied!');
    }},
  ];

  if (viewMode === 'landing') {
    return (
      <LandingPage
        theme={theme}
        setTheme={setTheme}
        onOpenStudio={() => setViewMode('studio')}
      />
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--p-app)' }}>
      {/* Toast Notification Container */}
      <Toast toasts={toasts} onDismiss={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))} />

      {/* Global Command Palette (⌘K) */}
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} items={commandItems} />

      {/* Slide-out Side Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Workspace Configuration"
        description="Manage regional clusters and billing parameters."
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            <Button variant="ghost" size="sm" onClick={() => setDrawerOpen(false)}>Cancel</Button>
            <Button variant="primary" size="sm" onClick={() => { setDrawerOpen(false); addToast('Settings saved'); }}>Save Changes</Button>
          </div>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Input label="Workspace Name" value="Enterprise Production" onChange={() => {}} />
          <PasswordInput label="Access Secret" value="secret_live_8912" onChange={() => {}} />
          <Select label="Region" options={[{ value: 'us', label: 'US East (N. Virginia)' }, { value: 'eu', label: 'EU Central (Frankfurt)' }]} value="eu" onChange={() => {}} />
          <Switch checked label="Automated Backups" onChange={() => {}} />
          <Slider label="Memory Allocation (GB)" value={32} onChange={() => {}} min={4} max={128} />
        </div>
      </Drawer>

      {/* Modal Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Confirm Infrastructure Deployment"
        description="Propagating 100+ design tokens across 42 global edge clusters."
        icon={<Zap size={18} color="var(--p-success)" />}
        footer={
          <>
            <Button variant="ghost" size="sm" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={<Zap size={12} />}
              onClick={() => {
                setDialogOpen(false);
                addToast('Cluster synchronization complete!', 'success');
              }}
            >
              Deploy Now
            </Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-md)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontSize: 12, fontWeight: 550, color: 'var(--p-t-900)' }}>Target Edge Regions</span>
              <span style={{ fontSize: 11, color: 'var(--p-t-500)' }}>Frankfurt, Virginia, Tokyo, Singapore</span>
            </div>
            <Badge variant="success" dot size="sm">42 Healthy</Badge>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-md)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontSize: 12, fontWeight: 550, color: 'var(--p-t-900)' }}>Security Protocol</span>
              <span style={{ fontSize: 11, color: 'var(--p-t-500)' }}>mTLS Strict Mutual Handshake</span>
            </div>
            <Badge variant="neutral" size="sm">TLS 1.3</Badge>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-md)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontSize: 12, fontWeight: 550, color: 'var(--p-t-900)' }}>Live Throughput Peak</span>
              <span style={{ fontSize: 11, color: 'var(--p-t-500)' }}>4.8 GB/s</span>
            </div>
            <Sparkline data={[10, 24, 18, 38, 52, 46, 68]} color="var(--p-success)" width={90} height={20} />
          </div>
        </div>
      </Dialog>

      {/* ── Dynamic Island Floating Navbar (760px wide capsule) ─── */}
      <nav
        style={{
          position: 'fixed',
          top: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
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
          border: 'none',
          boxShadow: 'none',
        }}
      >
        {/* Brand logo & name */}
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', flexShrink: 0 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--p-t-900)', letterSpacing: '-0.02em' }}>
            AntiSlop UI
          </span>
        </div>

        {/* Center Search Pill */}
        <button
          onClick={() => setCmdOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 7,
            padding: '4px 12px',
            height: 28,
            borderRadius: 99,
            backgroundColor: 'var(--p-soft)',
            border: 'none',
            outline: 'none',
            color: 'var(--p-t-500)',
            fontSize: 11.5,
            fontWeight: 400,
            cursor: 'pointer',
            fontFamily: 'inherit',
            transition: 'background-color 0.12s var(--p-ease-out)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-hover)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-soft)')}
        >
          <Search size={11} />
          <span>Search 100+ components…</span>
          <kbd
            style={{
              fontSize: 9.5,
              fontFamily: 'var(--p-font-mono)',
              padding: '1px 4px',
              borderRadius: 3,
              backgroundColor: 'var(--p-surface)',
              color: 'var(--p-t-500)',
            }}
          >
            ⌘K
          </kbd>
        </button>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <ThemeToggle theme={theme} onChange={setTheme} />

          <Button
            variant="ghost"
            size="sm"
            icon={<GithubIcon size={12} />}
            onClick={() => window.open('https://github.com', '_blank')}
            style={{ borderRadius: 99 }}
          >
            GitHub
          </Button>

          <Button
            variant="primary"
            size="sm"
            icon={<Globe size={12} />}
            onClick={() => setViewMode('landing')}
            style={{ borderRadius: 99 }}
          >
            Landing Page
          </Button>
        </div>
      </nav>

      {/* ── Main Showcase Body ──────────────────────────────────── */}
      <main style={{ flex: 1, maxWidth: 980, margin: '0 auto', width: '100%', padding: '94px 20px 80px' }}>
        
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section style={{ textAlign: 'center', marginBottom: 44, animation: 'pSlideUp 0.25s var(--p-ease-out)' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '3px 9px',
              borderRadius: 'var(--p-r-full)',
              backgroundColor: 'var(--p-soft)',
              color: 'var(--p-t-600)',
              fontSize: 11,
              fontWeight: 500,
              marginBottom: 14,
            }}
          >
            <StatusDot status="running" size={5} />
            <span>Universal Design System for Dashboards, FinTech & Landing</span>
          </div>

          <h1
            style={{
              fontSize: 38,
              fontWeight: 500,
              letterSpacing: '-0.035em',
              color: 'var(--p-t-900)',
              lineHeight: 1.2,
              maxWidth: 720,
              margin: '0 auto 14px',
            }}
          >
            Zero Border. Zero Shadow. Pure Tactile Surface.
          </h1>

          <p
            style={{
              fontSize: 14.5,
              color: 'var(--p-t-500)',
              lineHeight: 1.6,
              maxWidth: 640,
              margin: '0 auto 24px',
              fontWeight: 400,
            }}
          >
            A comprehensive suite of 100+ universal React components: Sparkline charts, Virtual credit cards, Heatmaps, Feature blocks, Steppers, Invoices, and Data tables.
          </p>

          {/* Quick CLI Copy Pill */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CopyButton value="npm i @antislop/ui" label="npm i @antislop/ui" size="md" />
          </div>
        </section>

        {/* ── CATEGORY FILTER TABS ───────────────────────────────── */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <SegmentedControl
            options={[
              { value: 'all', label: 'All 100+ Components' },
              { value: 'dashboard', label: 'Dashboard & Charts' },
              { value: 'fintech', label: 'FinTech & Billing' },
              { value: 'marketing', label: 'Landing & Marketing' },
              { value: 'forms', label: 'Inputs & Forms' },
              { value: 'data', label: 'Data & Tables' },
            ]}
            value={activeCategory}
            onChange={(v) => setActiveCategory(v as any)}
          />
        </div>

        {/* ── SHOWCASE GRID (Dynamically Balanced 2-Column Masonry) ─── */}
        {(() => {
          const cardsList = [
            {
              id: 'dashboard-sparklines',
              categories: ['all', 'dashboard'],
              element: (
                <Card
                  key="dashboard-sparklines"
                  title="Dashboard Sparklines & Activity"
                  subtitle="SVG sparkline trend charts and deployment heatmaps."
                  action={
                    <Button variant="ghost" size="sm" icon={<Copy size={11} />} onClick={() => copyCode('<Sparkline data={[10, 24, 18, 42, 60]} />', 'Sparkline')}>
                      Copy
                    </Button>
                  }
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 12, backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-lg)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                      <div style={{ padding: '10px 12px', backgroundColor: 'var(--p-surface)', borderRadius: 'var(--p-r-md)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <span style={{ fontSize: 11, color: 'var(--p-t-500)' }}>Network Throughput</span>
                        <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--p-t-900)' }}>4.2 GB/s</span>
                        <Sparkline data={[12, 18, 15, 26, 32, 28, 42, 50, 46, 64]} color="var(--p-success)" width={160} height={28} />
                      </div>

                      <div style={{ padding: '10px 12px', backgroundColor: 'var(--p-surface)', borderRadius: 'var(--p-r-md)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <span style={{ fontSize: 11, color: 'var(--p-t-500)' }}>Memory Footprint</span>
                        <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--p-t-900)' }}>24.8 GB</span>
                        <Sparkline data={[45, 42, 40, 48, 52, 50, 58, 54, 60, 68]} color="var(--p-t-800)" width={160} height={28} />
                      </div>
                    </div>

                    <Divider />

                    <ActivityHeatmap label="Edge Deployment Activity (28 Days)" />
                  </div>
                </Card>
              ),
            },
            {
              id: 'api-tokens',
              categories: ['all', 'fintech'],
              element: (
                <Card
                  key="api-tokens"
                  title="API Tokens & Security Vault"
                  subtitle="Production secret keys, granular scopes, and instant token generation."
                  action={
                    <Button variant="ghost" size="sm" icon={<Copy size={11} />} onClick={() => copyCode('<CopyButton value="antislop_live_8912" />', 'TokenVault')}>
                      Copy
                    </Button>
                  }
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 12, backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-lg)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 12, fontWeight: 550, color: 'var(--p-t-900)' }}>Production API Key</span>
                        <Badge variant="success" dot size="sm">Active</Badge>
                      </div>
                      <CopyButton value="antislop_live_4901824091ba" label="antislop_live_4901824091ba" size="md" />
                    </div>

                    <Divider />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 11.5, color: 'var(--p-t-600)' }}>Assigned Scopes</span>
                        <div style={{ display: 'flex', gap: 4 }}>
                          <Chip label="read:metrics" size="sm" />
                          <Chip label="write:deploy" size="sm" />
                          <Chip label="admin" size="sm" />
                        </div>
                      </div>

                      <PropertyRow
                        label="Rate Limit Tier"
                        value={<span style={{ fontFamily: 'var(--p-font-mono)', fontSize: 11 }}>10,000 req/min</span>}
                      />
                    </div>
                  </div>
                </Card>
              ),
            },
            {
              id: 'buttons-toggles',
              categories: ['all', 'forms', 'dashboard'],
              element: (
                <Card
                  key="buttons-toggles"
                  title="Buttons & Toggle Alignment"
                  subtitle="Spring buttons, segmented pills, and toggle groups."
                  action={
                    <Button variant="ghost" size="sm" icon={<Copy size={11} />} onClick={() => copyCode('<Button variant="primary">Submit</Button>', 'Button')}>
                      Copy
                    </Button>
                  }
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 12, backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-lg)' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
                      <Button variant="primary">Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="danger">Danger</Button>
                      <Button variant="secondary" loading>Loading</Button>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', justifyContent: 'space-between' }}>
                      <SplitButton
                        label="Deploy Release"
                        onClick={() => addToast('Release initiated!')}
                        onDropdownClick={() => addToast('Select release pipeline')}
                      />

                      <ToggleGroup
                        value={toggleAlign}
                        onChange={setToggleAlign}
                        items={[
                          { value: 'left', icon: <AlignLeft size={13} />, title: 'Align Left' },
                          { value: 'center', icon: <AlignCenter size={13} />, title: 'Align Center' },
                          { value: 'right', icon: <AlignRight size={13} />, title: 'Align Right' },
                        ]}
                      />

                      <ButtonGroup attached>
                        <Button variant="secondary" size="sm">Day</Button>
                        <Button variant="primary" size="sm">Week</Button>
                        <Button variant="secondary" size="sm">Month</Button>
                      </ButtonGroup>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 4 }}>
                      <SegmentedControl
                        options={[
                          { value: 'monthly', label: 'Monthly' },
                          { value: 'annual', label: 'Annual (-20%)' },
                        ]}
                        value={segmentedVal}
                        onChange={setSegmentedVal}
                      />

                      <div style={{ display: 'flex', gap: 12 }}>
                        <Switch checked={switchVal} onChange={setSwitchVal} label="Auto-sync" />
                        <Checkbox checked={checkboxVal} onChange={setCheckboxVal} label="Invoices" />
                      </div>
                    </div>
                  </div>
                </Card>
              ),
            },
            {
              id: 'kpi-stat-cards',
              categories: ['all', 'data', 'dashboard', 'fintech'],
              element: (
                <Card
                  key="kpi-stat-cards"
                  title="KPI & Stat Metric Cards"
                  subtitle="2x2 dense analytics grid with trend badges and zero blank space."
                  action={
                    <Button variant="ghost" size="sm" icon={<Copy size={11} />} onClick={() => copyCode('<StatCard title="Revenue" value="$48,250" change="+14.2%" trend="up" />', 'StatCard')}>
                      Copy
                    </Button>
                  }
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    <StatCard
                      title="Monthly Revenue"
                      value="$48,250"
                      change="+14.2%"
                      trend="up"
                      description="vs. $42.1k last month"
                      icon={<TrendingUp size={13} />}
                    />
                    <StatCard
                      title="Active Subscriptions"
                      value="1,420"
                      change="+8.1%"
                      trend="up"
                      description="Net +112 this week"
                      icon={<Users size={13} />}
                    />
                    <StatCard
                      title="Edge Cluster Uptime"
                      value="99.98%"
                      change="+0.02%"
                      trend="up"
                      description="42 nodes synchronized"
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
                </Card>
              ),
            },
            {
              id: 'zero-border-table',
              categories: ['all', 'data', 'fintech'],
              element: (
                <Card
                  key="zero-border-table"
                  title="Zero-Border Data Table"
                  subtitle="Fixed layout, no horizontal scroll, and hover row styling."
                  action={
                    <Button variant="ghost" size="sm" icon={<Copy size={11} />} onClick={() => copyCode('<Table columns={columns} data={data} />', 'Table')}>
                      Copy
                    </Button>
                  }
                >
                  <Table
                    columns={userColumns}
                    data={sampleUsers}
                    onRowClick={(u) => addToast(`Selected ${u.name}`)}
                  />
                </Card>
              ),
            },
            {
              id: 'badges-chips-avatars',
              categories: ['all', 'data'],
              element: (
                <Card
                  key="badges-chips-avatars"
                  title="Badges, Chips & User Avatars"
                  subtitle="Status dot capsules, tag chips with dismiss, and avatar groups."
                  action={
                    <Button variant="ghost" size="sm" icon={<Copy size={11} />} onClick={() => copyCode('<Badge variant="success" dot>Active</Badge>', 'Badge')}>
                      Copy
                    </Button>
                  }
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 12, backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-lg)' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
                      <Badge variant="success" dot>Active</Badge>
                      <Badge variant="neutral">Verified</Badge>
                      <Badge variant="pro" dot>Enterprise</Badge>
                      <Badge variant="danger" dot>Review Required</Badge>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, alignItems: 'center' }}>
                      <Chip label="Zero Border" selected />
                      <Chip label="React 19" onRemove={() => addToast('Tag removed')} />
                      <Chip label="TypeScript" onRemove={() => addToast('Tag removed')} />
                      <Chip label="MIT Licensed" />
                    </div>

                    <Divider />

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 12, color: 'var(--p-t-600)', fontWeight: 500 }}>Active Collaborators</span>
                      <AvatarGroup
                        users={[
                          { name: 'Sophia Sterling' },
                          { name: 'Marcus Vance' },
                          { name: 'Elena Rostova' },
                          { name: 'David Miller' },
                        ]}
                        max={3}
                      />
                    </div>

                    <PropertyRow label="Cluster Latency" value={<span style={{ fontFamily: 'var(--p-font-mono)' }}>14ms</span>} hint="Global median" />

                    <Divider />

                    <DescriptionList
                      columns={2}
                      items={[
                        { label: 'Region', value: 'EU-Central (Frankfurt)' },
                        { label: 'Security', value: 'AES-256 GCM' },
                      ]}
                    />
                  </div>
                </Card>
              ),
            },
            {
              id: 'landing-marketing',
              categories: ['all', 'marketing'],
              element: (
                <Card
                  key="landing-marketing"
                  title="Landing & Marketing Cards"
                  subtitle="Feature spotlights and verified customer testimonials."
                  action={
                    <Button variant="ghost" size="sm" icon={<Copy size={11} />} onClick={() => copyCode('<FeatureCard title="Global Edge" />', 'FeatureCard')}>
                      Copy
                    </Button>
                  }
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, padding: 12, backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-lg)' }}>
                    <FeatureCard
                      icon={<Globe size={16} />}
                      title="Global Edge Scale"
                      description="Deploy to 42 edge regions with zero cold starts."
                      actionText="Learn more"
                      onAction={() => addToast('Navigating to Edge Docs')}
                    />
                    <FeatureCard
                      icon={<ShieldCheck size={16} />}
                      title="Zero-Trust Security"
                      description="Built-in mTLS, audit logging, and role-based access."
                      actionText="Explore RBAC"
                      onAction={() => addToast('Navigating to Security')}
                    />
                  </div>
                </Card>
              ),
            },
            {
              id: 'pricing-tiers',
              categories: ['all', 'marketing', 'fintech'],
              element: (
                <Card
                  key="pricing-tiers"
                  title="Pricing Comparison & Proof"
                  subtitle="Full pricing tier cards with verified reviews."
                  action={
                    <Button variant="ghost" size="sm" icon={<Copy size={11} />} onClick={() => copyCode('<PricingTier name="Pro" price="$49" />', 'PricingTier')}>
                      Copy
                    </Button>
                  }
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 12, backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-lg)' }}>
                    <PricingTier
                      name="Enterprise Pro"
                      price="$49"
                      period="/user/month"
                      description="For high-growth product teams requiring edge scale."
                      popular
                      features={[
                        '100+ Universal React Components',
                        'Zero-Border Surface Layering Standards',
                        'Unlimited Edge Cluster Sync',
                      ]}
                      ctaText="Upgrade to Pro"
                      onSelect={() => addToast('Upgraded to Pro!', 'success')}
                    />

                    <Divider />

                    <TestimonialCard
                      quote="AntiSlop UI eliminates visual clutter completely. The tactile spring response is second to none."
                      author="Sophia Sterling"
                      role="Head of Product"
                      company="Linear Dynamics"
                    />
                  </div>
                </Card>
              ),
            },
            {
              id: 'inputs-passwords',
              categories: ['all', 'forms'],
              element: (
                <Card
                  key="inputs-passwords"
                  title="Inputs, Passwords & PIN (OTP)"
                  subtitle="Universal text fields with icons, password meters, and PIN OTPs."
                  action={
                    <Button variant="ghost" size="sm" icon={<Copy size={11} />} onClick={() => copyCode('<Input icon={<Mail size={13} />} label="Email" />', 'Input')}>
                      Copy
                    </Button>
                  }
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 12, backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-lg)' }}>
                    <Input
                      label="Email address"
                      icon={<Mail size={13} />}
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                    />

                    <PasswordInput
                      label="Password"
                      value={passValue}
                      onChange={(e) => setPassValue(e.target.value)}
                    />

                    <PasswordStrength score={4} />

                    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 16, alignItems: 'flex-start' }}>
                      <PinInput label="2FA PIN Code" length={4} value={pinValue} onChange={setPinValue} />
                      <div style={{ minWidth: 0 }}>
                        <NumberInput label="Stepper" value={numberValue} onChange={setNumberValue} min={1} max={64} />
                      </div>
                    </div>

                    <SearchInput
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      onClear={() => setSearchValue('')}
                      shortcut="⌘F"
                      placeholder="Quick search..."
                    />

                    <Textarea
                      label="Description Note"
                      value={textareaValue}
                      onChange={(e) => setTextareaValue(e.target.value)}
                      rows={2}
                    />
                  </div>
                </Card>
              ),
            },
            {
              id: 'selects-sliders',
              categories: ['all', 'forms'],
              element: (
                <Card
                  key="selects-sliders"
                  title="Selects, Sliders & Color Swatches"
                  subtitle="Dropdown selects, multi-pill selectors, and date pickers."
                  action={
                    <Button variant="ghost" size="sm" icon={<Copy size={11} />} onClick={() => copyCode('<MultiSelect options={opts} value={val} onChange={setVal} />', 'MultiSelect')}>
                      Copy
                    </Button>
                  }
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 12, backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-lg)' }}>
                    <Select
                      label="Subscription Plan"
                      options={SELECT_OPTIONS}
                      value={selectValue}
                      onChange={setSelectValue}
                    />

                    <MultiSelect
                      label="Security Tokens"
                      options={MULTI_OPTIONS}
                      value={multiValue}
                      onChange={setMultiValue}
                    />

                    <Slider
                      label="API Limit (req/sec)"
                      value={sliderVal}
                      onChange={setSliderVal}
                      min={10}
                      max={200}
                    />

                    <RangeSlider
                      label="Bandwidth Allocation Range (%)"
                      minVal={rangeMin}
                      maxVal={rangeMax}
                      onChange={(min, max) => { setRangeMin(min); setRangeMax(max); }}
                    />

                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                      <DatePicker label="Schedule Date" value={dateVal} onChange={setDateVal} />
                      <ColorPicker label="Theme Accent" value={colorVal} onChange={setColorVal} />
                    </div>

                    <Dropzone onFilesSelected={() => addToast('Files uploaded successfully!')} />
                  </div>
                </Card>
              ),
            },
            {
              id: 'navigation-suite',
              categories: ['all', 'dashboard', 'data'],
              element: (
                <Card
                  key="navigation-suite"
                  title="Navigation Suite"
                  subtitle="Breadcrumbs, wizard steppers, tab bars, and pagination."
                  action={
                    <Button variant="ghost" size="sm" icon={<Copy size={11} />} onClick={() => copyCode('<Stepper steps={steps} currentStep={1} />', 'Stepper')}>
                      Copy
                    </Button>
                  }
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: 12, backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-lg)' }}>
                    <Breadcrumb
                      items={[
                        { label: 'Workspaces', onClick: () => addToast('Navigating') },
                        { label: 'Production', onClick: () => addToast('Navigating') },
                        { label: 'Cluster Metrics' },
                      ]}
                    />

                    <Stepper
                      steps={[
                        { id: '1', title: 'Details' },
                        { id: '2', title: 'Security' },
                        { id: '3', title: 'Deploy' },
                      ]}
                      currentStep={stepperStep}
                    />

                    <div style={{ display: 'flex', gap: 6 }}>
                      <Button variant="secondary" size="sm" onClick={() => setStepperStep(Math.max(0, stepperStep - 1))}>
                        Previous
                      </Button>
                      <Button variant="primary" size="sm" onClick={() => setStepperStep(Math.min(2, stepperStep + 1))}>
                        Next Step
                      </Button>
                    </div>

                    <Tabs
                      tabs={[
                        { id: 'analytics', label: 'Analytics', badge: 'Live' },
                        { id: 'team', label: 'Team', badge: 8 },
                        { id: 'billing', label: 'Billing' },
                      ]}
                      activeId={tabValue}
                      onChange={setTabValue}
                      variant="pill"
                    />

                    <Pagination currentPage={page} totalPages={4} onPageChange={setPage} />
                  </div>
                </Card>
              ),
            },
            {
              id: 'progress-spinners',
              categories: ['all', 'dashboard', 'data'],
              element: (
                <Card
                  key="progress-spinners"
                  title="Progress, Spinners & Skeletons"
                  subtitle="Linear and circular progress gauges with loading states."
                  action={
                    <Button variant="ghost" size="sm" icon={<Copy size={11} />} onClick={() => copyCode('<Progress value={78} showValue />', 'Progress')}>
                      Copy
                    </Button>
                  }
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 12, backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-lg)' }}>
                    <Progress label="Storage Quota" value={78} showValue />
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <CircularProgress value={84} size={36} strokeWidth={3.5} />
                        <div>
                          <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--p-t-900)' }}>CPU Utilization</div>
                          <div style={{ fontSize: 11, color: 'var(--p-t-500)' }}>84% Peak Load</div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <Spinner size={18} />
                        <span style={{ fontSize: 12, color: 'var(--p-t-600)' }}>Syncing clusters...</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <span style={{ fontSize: 11.5, color: 'var(--p-t-500)' }}>Skeleton Placeholder:</span>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <Skeleton variant="circle" width={28} height={28} />
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <Skeleton width="60%" height={10} />
                          <Skeleton width="90%" height={8} />
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 4 }}>
                      <span style={{ fontSize: 12, color: 'var(--p-t-700)', fontWeight: 500 }}>Customer Rating:</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Rating value={rating} onChange={setRating} />
                        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--p-t-900)' }}>{rating}.0</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ),
            },
            {
              id: 'disclosures-trees',
              categories: ['all', 'marketing', 'data'],
              element: (
                <Card
                  key="disclosures-trees"
                  title="Disclosures, Trees & Callouts"
                  subtitle="Expandable accordions, hierarchical trees, and banners."
                  action={
                    <Button variant="ghost" size="sm" icon={<Copy size={11} />} onClick={() => copyCode('<Accordion title="Details">Content</Accordion>', 'Accordion')}>
                      Copy
                    </Button>
                  }
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 12, backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-lg)' }}>
                    <Banner
                      title="Open Source Release"
                      description="100+ components live on npm."
                      action={<Button variant="primary" size="sm">Explore</Button>}
                      onDismiss={() => addToast('Banner dismissed')}
                    />

                    <Callout title="Zero-Border Invariant Guarantee">
                      AntiSlop UI achieves visual hierarchy through calibrated surface luminance.
                    </Callout>

                    <Alert type="success" title="42 Clusters Synchronized">
                      All edge regions are operating at 100% capacity.
                    </Alert>

                    <Accordion title="How does AntiSlop UI eliminate box-shadows?" subtitle="Architecture details">
                      By using multi-level surface contrasts (App, Surface, Soft, Sunken), AntiSlop UI achieves deep visual hierarchy without artificial muddy shadows.
                    </Accordion>

                    <Tree data={sampleTree} onSelect={(node) => addToast(`Selected ${node.label}`)} />
                  </div>
                </Card>
              ),
            },
            {
              id: 'modals-context-menu',
              categories: ['all', 'dashboard', 'data'],
              element: (
                <Card
                  key="modals-context-menu"
                  title="Modals, Drawers & Context Menus"
                  subtitle="Right-click menus, dropdowns, dialogs, and slide-out sheets."
                  action={
                    <Button variant="ghost" size="sm" icon={<Copy size={11} />} onClick={() => copyCode('<Dialog open={open} onClose={close} title="Modal">Content</Dialog>', 'Dialog')}>
                      Copy
                    </Button>
                  }
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 12, backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-lg)' }}>
                    <ContextMenu
                      items={[
                        { id: '1', label: 'Copy Link', icon: <Share2 size={13} />, onSelect: () => addToast('Link copied') },
                        { id: '2', label: 'Export Data', icon: <Download size={13} />, onSelect: () => addToast('Exporting...') },
                        { id: '3', label: 'Delete Item', icon: <Trash2 size={13} />, danger: true, onSelect: () => addToast('Deleted item', 'error') },
                      ]}
                    >
                      <div style={{ padding: '16px', textAlign: 'center', backgroundColor: 'var(--p-surface)', borderRadius: 'var(--p-r-md)', cursor: 'context-menu', fontSize: 12, color: 'var(--p-t-600)' }}>
                        Right-click here to trigger ContextMenu
                      </div>
                    </ContextMenu>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
                      <Button variant="primary" icon={<Layers size={12} />} onClick={() => setDialogOpen(true)}>
                        Trigger Modal
                      </Button>
                      <Button variant="secondary" icon={<Settings size={12} />} onClick={() => setDrawerOpen(true)}>
                        Open Side Drawer
                      </Button>
                      <Button variant="secondary" icon={<Search size={12} />} onClick={() => setCmdOpen(true)}>
                        Command Palette (⌘K)
                      </Button>
                      <Button variant="ghost" onClick={() => addToast('Toast notification fired!')}>
                        Fire Toast
                      </Button>
                    </div>

                    <Timeline events={timelineEvents} />
                  </div>
                </Card>
              ),
            },
          ];

          const filteredCards = cardsList.filter((c) => c.categories.includes(activeCategory));
          const leftCol = filteredCards.filter((_, i) => i % 2 === 0);
          const rightCol = filteredCards.filter((_, i) => i % 2 === 1);

          return (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: rightCol.length > 0 ? 'repeat(auto-fit, minmax(440px, 1fr))' : '1fr',
                gap: 16,
                alignItems: 'start',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {leftCol.map((c) => c.element)}
              </div>
              {rightCol.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {rightCol.map((c) => c.element)}
                </div>
              )}
            </div>
          );
        })()}

      </main>

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />

      {/* ── CURVED FUTURISTIC FOOTER ─────────────────────────────── */}
      <footer style={{ maxWidth: 980, margin: '40px auto 32px', width: '100%', padding: '0 20px', userSelect: 'none' }}>
        <div
          style={{
            backgroundColor: 'var(--p-surface)',
            borderRadius: 28,
            padding: '32px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
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
              <span>100+ React Primitives Live & Tested</span>
            </div>
          </div>

          <Divider />

          {/* Bottom Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 11.5, color: 'var(--p-t-400)', flexWrap: 'wrap', gap: 8 }}>
            <span>© 2026 AntiSlop UI Foundation. Zero Border • Zero Shadow • MIT License</span>
            <div style={{ display: 'flex', gap: 12 }}>
              <span style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top ↑</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
