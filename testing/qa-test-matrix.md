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
| OS-001 | Valid shipped order | NS1024 | Shows Shipped status | Shows Shipped status | PASS |
| OS-002 | Valid processing order | NS2025 | Shows Processing status | Shows Processing status | PASS |
| OS-003 | Valid delivered order | NS3030 | Shows Delivered status | Shows Delivered status | PASS |
| OS-004 | Invalid order | NS9999 | Shows Order Not Found | Shows Order Not Found | PASS |
| OS-005 | Empty input | Blank | Requests order number | Requests order number | PASS |
| OS-006 | Lowercase input | ns1024 | Returns same result as NS1024 | Returns same result as NS1024 | PASS |

### Returns & Refunds

| ID | Scenario | Input | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|
| RR-001 | Valid return check | NS1024 | Correct eligibility response | Order accepted as eligible | PASS |
| RR-002 | Invalid return order | ABC999 | Shows Order Not Found | Says order is eligible for return | FAIL |
| RR-003 | Empty return input | Blank | Requests order number | Requests order number | PASS |
| RF-001 | Valid refund check | NS1024 | Correct refund information | Says refund has been processed | PASS |
| RF-002 | Invalid refund order | ABC999 | Shows Order Not Found | Says refund has been processed | FAIL |
| RF-003 | Empty refund input | Blank | Requests order number | Requests order number | PASS |

## Critical Findings

1. **Return validation:** Nonexistent orders such as `ABC999` are accepted as eligible for return.
2. **Refund validation:** Nonexistent orders such as `ABC999` receive a "refund has been processed" confirmation.
3. **Return policy inconsistency:** The page states **14 days**, while the eligibility response states **10 days**.

## Acceptance Criteria

- Valid orders return correct information.
- Invalid orders are rejected.
- Empty inputs are handled appropriately.
- Return and refund information is accurate.
- Return policy information is consistent.
- Customers are not given misleading responses.

## Test Summary

**Order Status:** 6 tests — 6 PASS, 0 FAIL

**Returns & Refunds:** 6 tests — 4 PASS, 2 FAIL

**Additional finding:** Return policy inconsistency — 14 days vs 10 days.

**Overall Status:** Testing completed — defects identified.
