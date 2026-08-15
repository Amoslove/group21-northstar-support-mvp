 # Northstar Support MVP — QA Test Matrix

**Tester:** Blanche  
**Scope:** Order Status + Returns & Refunds  
**Branch:** `test/support-mvp`

## QA Objective

Verify that the MVP provides accurate customer responses and safely handles valid, invalid, and empty inputs.

## Test Cases

### Order Status

| ID | Scenario | Input | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|
| OS-001 | Valid shipped order | NS1024 | Shows Shipped status | | |
| OS-002 | Valid processing order | NS2025 | Shows Processing status | | |
| OS-003 | Valid delivered order | NS3030 | Shows Delivered status | | |
| OS-004 | Invalid order | NS9999 | Shows Order Not Found | | |
| OS-005 | Empty input | Blank | Requests order number | | |
| OS-006 | Lowercase input | ns1024 | Returns same result as NS1024 | | |

### Returns & Refunds

| ID | Scenario | Input | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|
| RR-001 | Valid return check | NS1024 | Correct eligibility response | | |
| RR-002 | Invalid return order | ABC999 | Shows Order Not Found | | |
| RR-003 | Empty return input | Blank | Requests order number | | |
| RF-001 | Valid refund check | NS1024 | Correct refund information | | |
| RF-002 | Invalid refund order | ABC999 | Shows Order Not Found | | |
| RF-003 | Empty refund input | Blank | Requests order number | | |

## Acceptance Criteria

- Valid orders return the correct information.
- Invalid orders are not treated as valid.
- Empty inputs are handled appropriately.
- Return/refund responses are accurate and consistent with the stated policy.
- No misleading confirmation is given to customers.

## Test Summary

| Category | Planned | Passed | Failed |
|---|---:|---:|---:|
| Order Status | 6 | | |
| Returns & Refunds | 6 | | |
| **Total** | **12** | | |

**Status:** Testing in progress
