import { Button, FlexItem, Small } from '@bigcommerce/big-design';
import { AssignmentIcon, CheckIcon, InvertColorsIcon, RestoreIcon } from '@bigcommerce/big-design-icons';
import React, { useContext, useState } from 'react';

import { JavascriptIcon } from '../Icons/JavascriptIcon';
import { TypescriptIcon } from '../Icons/TypescriptIcon';
import { CodeEditorContext } from '../StoryWrapper/StoryWrapper';

import { StyledFlex } from './styled';

interface SnippetControls {
  helperText?: string;
  copyToClipboard(): void;
  resetCode?(): void;
}

function getCopyToClipboardIcon(isCopying: boolean) {
  return isCopying ? (
    <CheckIcon title="Copying" color="success" />
  ) : (
    <AssignmentIcon title="Copy" color="secondary60" />
  );
}

function onCopy(setIsCopying: (copying: boolean) => void, copyToClipboard: () => void) {
  setIsCopying(true);
  copyToClipboard();

  setTimeout(() => {
    setIsCopying(false);
  }, 1000);
}

export const SnippetControls: React.FC<SnippetControls> = props => {
  const { copyToClipboard, helperText, resetCode } = props;
  const [isCopying, setIsCopying] = useState(false);
  const { toggleTheme: toggleEditorTheme, setLanguage } = useContext(CodeEditorContext);

  return (
    <StyledFlex
      borderBottom="box"
      backgroundColor="secondary20"
      justifyContent="flex-end"
      alignItems="center"
      style={{ zIndex: 999 }}
    >
      <FlexItem flexGrow={1}>
        <Small marginHorizontal="small">{helperText}</Small>
      </FlexItem>

      <FlexItem borderLeft="box">
        <Button iconOnly={<TypescriptIcon />} variant="subtle" onClick={() => setLanguage('tsx')} />
      </FlexItem>

      <FlexItem borderLeft="box">
        <Button iconOnly={<JavascriptIcon />} variant="subtle" onClick={() => setLanguage('jsx')} />
      </FlexItem>

      <FlexItem borderLeft="box">
        <Button
          iconOnly={getCopyToClipboardIcon(isCopying)}
          variant="subtle"
          onClick={() => onCopy(setIsCopying, copyToClipboard)}
          disabled={isCopying}
        />
      </FlexItem>
      {resetCode && (
        <FlexItem borderLeft="box">
          <Button iconOnly={<RestoreIcon title="Reset" color="secondary60" />} variant="subtle" onClick={resetCode} />
        </FlexItem>
      )}
      <FlexItem borderLeft="box">
        <Button
          iconOnly={<InvertColorsIcon title="Toggle Theme" color="secondary60" />}
          variant="subtle"
          onClick={toggleEditorTheme}
        />
      </FlexItem>
    </StyledFlex>
  );
};

SnippetControls.defaultProps = {
  helperText: 'Edit the code below to see your changes live!',
};
