import React from 'react';
import './App.css';
import { Stack, Nav, Text, SearchBox, Separator, initializeIcons, Panel, PrimaryButton, DefaultButton} from '@fluentui/react'
import { Card } from '@uifabric/react-cards'

// Initialize icons in case this example uses them
initializeIcons();

function App() {
  return (
    <Stack horizontalAlign horizontal >
      <MenuView/>
      <Separator vertical />
      <ItemView/>
    </Stack>
  );
}

function MenuView()
{
  const navLinkGroups = [
    {
      links: [
        {
          name: 'Actions',
          url: 'http://example.com',
          isExpanded: true,
          links: [
            {
              name: 'Add Test',
              url: 'http://msn.com',
              key: 'key1',
              target: '_blank',
            },
            {
              name: 'Run Test Locally',
              url: 'http://msn.com',
              key: 'key2',
              target: '_blank',
            },
            {
              name: 'Create Pull Request',
              url: 'http://msn.com',
              key: 'key3',
              target: '_blank',
            },
            {
              name: 'View Changed Test',
              url: 'http://msn.com',
              key: 'key4',
              target: '_blank',
            }
          ],
        },
      ],
    },
  ];

  
  return (
    <Stack verticalAlign="center" verticalFill>
      <Stack.Item align='center' verticalFill>
        <Text variant='xxLarge' > Extensibility Test Manager </Text>
      </Stack.Item>
      <Separator/>
      <Nav groups={navLinkGroups}></Nav>
    </Stack>
  );
}

function TestItemComponent(prop)
{
  return(
    <Card>
      <Card.Item>
        <Text>
          Cloud Test Name : Extensibility
        </Text>
      </Card.Item>
      <Card.Section>
        <Text>
          OS | Pile : Windows | Green
        </Text>
        <Text>
          OS | Pile : Linux | Red
        </Text>
      </Card.Section>
      <Card.Item>
        <Text>
          Assembly : Extensibility.dll
        </Text>
      </Card.Item>
      <Card.Item>
        <Text>
          Sever Type : Standalone, Cloudlifter, EngineXCopy
        </Text>
      </Card.Item>
    </Card>
  );
}

function TestContent()
{
  const elements = ['one', 'two', 'three'];
  let testContent = elements.map(
    (index)=>{
      return <TestItemComponent key={index} />
    });
  
  return(
      testContent
  );
}

function ItemView()
{
  return (
    <Stack horizontal>
      <Stack.Item>
        <SearchBox placeholder="Search for Extensibility Test" underlined={true} />
        <br/>
        <TestContent />
        <EditComponent />
      </Stack.Item>
    </Stack>
  );
}


// Add/Edit view
function EditComponent()
{
  return (
    <div>
      <Panel
        isOpen='true'
        //onDismiss={dismissPanel}
        headerText="Panel with footer at bottom"
        closeButtonAriaLabel="Close"
        // onRenderFooterContent={onRenderFooterContent}
        // Stretch panel content to fill the available height so the footer is positioned
        // at the bottom of the page
        isFooterAtBottom={true}
      >
        <p>Content goes here.</p>
      </Panel>
    </div>
  );
}

export default App;
