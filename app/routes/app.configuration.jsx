import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
  Tabs,
  LegacyCard,
  EmptyState
} from "@shopify/polaris";
import {useState, useCallback} from 'react';
import ConfigGeneralComponent from './pages/general'

const tabs = [
  {
    id: 'general',
    content: 'General',
    panelID: 'panel-general',
  },
  {
    id: 'design-button',
    content: 'Design Button',
    panelID: 'design-button',
  },
  {
    id: 'email-template',
    content: 'Email Template',
    panelID: 'email-template',
  },
  {
    id: 'language-setting',
    content: 'Language Setting',
    panelID: 'language-setting',
  },
];

export default function ConfigurationPage() {
  const renderTabContent = () => {
    switch (selected) {
      case 0:
        return <ConfigGeneralComponent />;
      default:
        return <EmptyState />;
    }
  };

  const [selected, setSelected] = useState(0);
  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  return (
    <Page
      fullWidth
      title="Configuration"
    >
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        {renderTabContent()}
      </Tabs>
    </Page>
  );
}
