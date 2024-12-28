import {
  Card, Page, Text, BlockStack, Button, Box, InlineGrid, Divider, ButtonGroup
} from "@shopify/polaris";
import {useState, useCallback} from 'react';

export default function ConfigGeneralComponent() {

  // Sử dụng một state duy nhất để quản lý cả hai trạng thái
  const [enabledStates, setEnabledStates] = useState({
    orderListEnabled: false,
    orderDetailEnabled: false,
    thankyouPageEnable: false,
    sendMailEnable: false,
    active: false
  });

  // Hàm để toggle trạng thái orderListEnabled
  const handleOrderList = useCallback(() => {
    setEnabledStates(prevState => ({
      ...prevState,
      orderListEnabled: !prevState.orderListEnabled
    }));
  }, []);

  // Hàm để toggle trạng thái orderDetailEnabled
  const handleOrderDetailEnabled = useCallback(() => {
    setEnabledStates(prevState => ({
      ...prevState,
      orderDetailEnabled: !prevState.orderDetailEnabled
    }));
  }, []);

  const handleThankyouPage = useCallback(() => {
    setEnabledStates(prevState => ({
      ...prevState,
      thankyouPageEnable: !prevState.thankyouPageEnable
    }));
  }, []);

  const handleSendMail = useCallback(() => {
    setEnabledStates(prevState => ({
      ...prevState,
      sendMailEnable: !prevState.sendMailEnable
    }));
  }, []);

  const handleActive = useCallback(() => {
    setEnabledStates(prevState => ({
      ...prevState,
      active: !prevState.active
    }));
  }, []);


  return (<Page
    fullWidth
  >
    <div style={{marginBottom: '40px'}}>
      <Divider borderColor="border"/>
    </div>
    <Card>
      <BlockStack gap="600">
        <InlineGrid columns="1fr auto">
          <BlockStack gap="100">
            <Text as="h3" variant="headingSm" fontWeight="medium">
              Activate/Deactivate the App
            </Text>
            <Text as="p" variant="bodyMd">
              If you activate the app, the Reorder button will appear on the live site.
            </Text>
          </BlockStack>
          <ButtonGroup variant="segmented">
            <Button pressed={enabledStates.active} onClick={handleActive}>
              Active
            </Button>
            <Button pressed={!enabledStates.active} onClick={handleActive}>
              Deactivate
            </Button>
          </ButtonGroup>
        </InlineGrid>
      </BlockStack>
    </Card>
    <div style={{margin: '40px 0'}}>
      <Divider borderColor="border"/>
    </div>
    <Card>
      <BlockStack gap="600">
        <BlockStack gap="100">
          <Text as="h3" variant="headingSm" fontWeight="medium">
            Reorder widget status
          </Text>
          <Text as="p" variant="bodyMd">
            Click the On button to enable the reorder button to display on the storefront.
          </Text>
        </BlockStack>
        <InlineGrid columns="1fr auto">
          <Box
            borderRadius="100"
            background="bg-surface-active"
            padding="200"
            paddingInline="200"
          >
            <InlineGrid columns="1fr auto" alignItems="center">
              <Text as="h3" variant="headingSm" fontWeight="medium">
                Enable/Disable the Re-order button on the Order Listing
              </Text>
              <Button pressed={enabledStates} onClick={handleOrderList}>
                {enabledStates.orderListEnabled ? 'ON' : 'OFF'}
              </Button>
            </InlineGrid>
          </Box>
        </InlineGrid>
        <InlineGrid columns="1fr auto">
          <Box
            borderRadius="100"
            background="bg-surface-active"
            padding="200"
            paddingInline="200"
          >
            <InlineGrid columns="1fr auto" alignItems="center">
              <Text as="h3" variant="headingSm" fontWeight="medium">
                Enable/Disable the Re-order button on the Order Detail
              </Text>
              <Button pressed={enabledStates} onClick={handleOrderDetailEnabled}>
                {enabledStates.orderDetailEnabled ? 'ON' : 'OFF'}
              </Button>
            </InlineGrid>
          </Box>
        </InlineGrid>
        <InlineGrid columns="1fr auto">
          <Box
            borderRadius="100"
            background="bg-surface-active"
            padding="200"
            paddingInline="200"
          >
            <InlineGrid columns="1fr auto" alignItems="center">
              <Text as="h3" variant="headingSm" fontWeight="medium">
                Enable/Disable the Re-order button on the Thankyou Page
              </Text>
              <Button pressed={enabledStates} onClick={handleThankyouPage}>
                {enabledStates.thankyouPageEnable ? 'ON' : 'OFF'}
              </Button>
            </InlineGrid>
          </Box>
        </InlineGrid>
      </BlockStack>
    </Card>
    <div style={{margin: '40px 0'}}>
      <Divider borderColor="border"/>
    </div>
    <Card>
      <BlockStack gap="600">
        <InlineGrid columns="1fr auto">
          <BlockStack gap="100">
            <Text as="h3" variant="headingSm" fontWeight="medium">
              Allow sending email reminders
            </Text>
            <Text as="p" variant="bodyMd">
              Note: reorder reminder email is only sent for those orders that are placed after enabling this settings
            </Text>
          </BlockStack>
          <Button pressed={enabledStates} onClick={handleSendMail}>
            {enabledStates.sendMailEnable ? 'ON' : 'OFF'}
          </Button>
        </InlineGrid>
      </BlockStack>
    </Card>
  </Page>);
}
