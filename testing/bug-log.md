# Northstar Support MVP — Bug Log

**Tester:** Blanche  
**Branch:** `test/support-mvp`

## BUG-001 — Invalid orders accepted for returns

**Severity:** High

**Steps:**
1. Open Returns & Refunds.
2. Enter `ABC999`.
3. Submit the request.

**Expected:** Order Not Found.

**Actual:** System says the order is eligible for return.

**Fix:** Validate the order against existing order data before checking return eligibility.

---

## BUG-002 — Invalid orders receive refund confirmation

**Severity:** High

**Steps:**
1. Open Returns & Refunds.
2. Enter `ABC999`.
3. Submit the request.

**Expected:** Order Not Found.

**Actual:** System says the refund has been processed.

**Fix:** Validate the order before displaying refund status.

---

## BUG-003 — Return policy inconsistency

**Severity:** Medium

**Issue:** The page states a 14-day return period, while the eligibility response states 10 days.

**Expected:** One consistent return-policy period.

**Fix:** Align the displayed policy and eligibility logic.
